import { Module } from '@nestjs/common';
import { CodeExecServiceController } from './code_exec_service.controller';
import { CodeExecServiceService } from './code_exec_service.service';

@Module({
  imports: [],
  controllers: [CodeExecServiceController],
  providers: [CodeExecServiceService],
})
export class CodeExecServiceModule {}
