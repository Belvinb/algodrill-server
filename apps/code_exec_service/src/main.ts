import { NestFactory } from '@nestjs/core';
import { CodeExecServiceModule } from './code_exec_service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CodeExecServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'revision_queue',
      },
    },
  );
  await app.listen();
}
bootstrap();
