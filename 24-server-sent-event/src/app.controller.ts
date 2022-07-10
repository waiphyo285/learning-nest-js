import { Controller, Get, MessageEvent, Res, Sse } from '@nestjs/common';
import { Response } from "express"
import { readFileSync } from 'fs';
import { join } from "path"
import { map } from 'rxjs/operators';
import { interval, Observable } from 'rxjs';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get("")
  getSse(@Res() response: Response) {
    response
      .type("text/hmtl")
      .send(readFileSync(join(__dirname, '../clients/index.html')).toString());
  }

  @Sse("sse")
  sse(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map((_) => ({ data: { hello: 'world' } } as MessageEvent)),
    );
  }
}
