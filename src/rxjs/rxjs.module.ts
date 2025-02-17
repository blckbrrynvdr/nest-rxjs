import { Module } from '@nestjs/common';
import { RxjsController } from './rxjs.controller';
import {RxjsService} from "./rxjs.service";

@Module({
  controllers: [RxjsController],
  providers: [RxjsService],
  exports: [RxjsService]
})
export class RxjsModule {
}
