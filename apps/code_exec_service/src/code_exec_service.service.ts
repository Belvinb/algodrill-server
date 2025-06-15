import { Injectable } from '@nestjs/common';

@Injectable()
export class CodeExecServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
