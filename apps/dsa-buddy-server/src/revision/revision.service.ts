import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from './schemas/question.schema';
import { Model } from 'mongoose';
import { Answer } from './schemas/answer.schema';
import { CreateQuestionDto } from './dto/question.dto';

@Injectable()
export class RevisionService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<Question>,
    @InjectModel(Question.name) private answerModel: Model<Answer>,
  ) {}

  async createQuestion(createQuestionDto: CreateQuestionDto): Promise<any> {
    console.log('Creating question with DTO:', createQuestionDto);
  }
}
