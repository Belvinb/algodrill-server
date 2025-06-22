import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from './schemas/question.schema';
import { Model } from 'mongoose';
import { Answer } from './schemas/answer.schema';
import { CreateQuestionDto } from './dto/question.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RevisionService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<Question>,
    @InjectModel(Question.name) private answerModel: Model<Answer>,
    @Inject('REVISION_SERVICE')
    private readonly revisionServiceClient: ClientProxy,
  ) {}

  async createQuestion(createQuestionDto: CreateQuestionDto): Promise<any> {
    console.log('Creating question with DTO:', createQuestionDto);
  }

  async submitAnser() {
    this.revisionServiceClient.emit('submit_answer', {
      msg: 'Hello from benny',
    });
    console.log('Answer submitted');
  }
}
