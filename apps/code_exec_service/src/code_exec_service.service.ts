import { Injectable } from '@nestjs/common';

@Injectable()
export class CodeExecServiceService {
  executeAnswer(body): any {
    console.log('Executing answer with body:', body);
  }
}
