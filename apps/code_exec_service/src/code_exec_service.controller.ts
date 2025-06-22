import { Controller } from '@nestjs/common';
import { CodeExecServiceService } from './code_exec_service.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class CodeExecServiceController {
  constructor(
    private readonly codeExecServiceService: CodeExecServiceService,
  ) {}

  @EventPattern('submit_answer')
  getHello(@Payload() data: any): any {
    return this.codeExecServiceService.executeAnswer(data);
  }
}
