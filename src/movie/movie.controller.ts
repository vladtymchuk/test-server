import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { type Response, type Request } from 'express';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}
  @Get()
  findAll(@Query() query: any) {
    return JSON.stringify(query);
  }

  @Get(':id/')
  findById(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() body: { title: string; genre: string }) {
    return body;
  }

  @Get('headers')
  getHeaders(@Headers() headers: any) {
    return headers;
  }

  @Get('user-agent')
  getUserAgent(@Headers('user-agent') userAgent: string) {
    return { userAgent };
  }

  @Get('request-details')
  getRequestDetails(@Req() req: Request) {
    return {
      body: req.body,
      headers: req.headers,
      query: req.query,
      params: req.params,
      method: req.method,
    };
  }

  @Get('response-details')
  getResponseDetails(@Res() res: Response) {
    res.status(201).json({
      message: 'Success',
    });
  }
}
