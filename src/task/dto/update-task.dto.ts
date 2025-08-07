import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Title must be a string' })
  @IsNotEmpty({ message: 'Title must not be empty' })
  @Length(3, 50, { message: 'Title must be between 3 and 50 characters' })
  title: string;

  @IsBoolean({ message: 'isCompleted must be a boolean' })
  @IsOptional()
  isCompleted: boolean;

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  @IsOptional()
  description: string;

  @IsNumber({}, { message: 'Priority must be a number' })
  @IsOptional()
  priority: number;
}
