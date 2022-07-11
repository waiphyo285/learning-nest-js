import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

import { AppService } from './app.service';
import { SampleDto } from './dto/sample.dto';
import { ParseFile } from './pipe/parse-file.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseInterceptors(FileInterceptor("file_name"))
  @Post("/file")
  uploadFile(
    @Body() body: SampleDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return {
      body,
      file: file.buffer.toString()
    }
  }

  @UseInterceptors(FileInterceptor("file_name"))
  @Post("file/pass-validation")
  uploadFileAndPassValidation(
    @Body() body: SampleDto,
    @UploadedFile(ParseFile) file: Express.Multer.File,
  ) {
    return {
      body,
      file: file.buffer.toString(),
    };
  }
}
