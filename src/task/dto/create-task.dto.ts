import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  IsUUID,
  Length,
  Matches,
  MinLength,
} from 'class-validator';
import { StartsWith } from '../decorators/start-with.decorator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @StartsWith('Task: ', { message: 'Title must start with "Task: "' })
  @Length(3, 50)
  title: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  @IsOptional()
  description: string;

  @IsInt({ message: 'Priority must be an integer' })
  @IsPositive({ message: 'Priority must be a positive number' })
  @IsOptional()
  priority: number;

  @IsArray({ message: 'Tags must be an array' })
  @IsEnum(TaskTag, { each: true, message: 'Invalid tag' })
  @IsOptional()
  tags: TaskTag[];
}
// @IsString()
// @MinLength(8)
// @Matches(/^(?=.*[A-Z])(?=.*[0-9]).+$/, {
//   message: 'Pass must contain capital letter and numbers',
// })
// password: string;

// @IsUrl(
//   {
//     protocols: ['https', 'wss'],
//     require_valid_protocol: false,
//     host_whitelist: ['google.com', 'localhost'],
//     host_blacklist: ['badhost.com'],
//   },
//   { message: 'Incorrect format url' },
// )
// webSiteUrl: string;

// @IsUUID('4', { message: 'Incorrect format uuid' })
// userId: string;
