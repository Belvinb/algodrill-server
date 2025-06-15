import { NestFactory } from '@nestjs/core';
import { CodeExecServiceModule } from './code_exec_service.module';

async function bootstrap() {
  const app = await NestFactory.create(CodeExecServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
