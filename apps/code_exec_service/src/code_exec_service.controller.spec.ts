import { Test, TestingModule } from '@nestjs/testing';
import { CodeExecServiceController } from './code_exec_service.controller';
import { CodeExecServiceService } from './code_exec_service.service';

describe('CodeExecServiceController', () => {
  let codeExecServiceController: CodeExecServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CodeExecServiceController],
      providers: [CodeExecServiceService],
    }).compile();

    codeExecServiceController = app.get<CodeExecServiceController>(CodeExecServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(codeExecServiceController.getHello()).toBe('Hello World!');
    });
  });
});
