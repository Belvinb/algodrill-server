import { Controller, Get } from '@nestjs/common';
import { CodeExecServiceService } from './code_exec_service.service';

@Controller()
export class CodeExecServiceController {
  constructor(private readonly codeExecServiceService: CodeExecServiceService) {}

  @Get()
  getHello(): string {
    return this.codeExecServiceService.getHello();
  }
}
