import { Body, Controller, Get, Post } from '@nestjs/common';
import { RevisionService } from './revision.service';
import { CreateQuestionDto } from './dto/question.dto';

import { Public } from 'src/auth/public.decorator';
import {
  Difficulty,
  RevisionLevel,
  Type,
} from 'src/common/enums/revision.enum';

@Controller('revision')
export class RevisionController {
  constructor(private readonly revisionService: RevisionService) {}
  @Public()
  @Get('levels')
  async getRevisionLevels() {
    return RevisionLevel;
  }

  @Public()
  @Get('difficulties')
  async getDifficulties() {
    return Difficulty;
  }

  @Public()
  @Get('types')
  async getTypes() {
    return Type;
  }

  @Public()
  @Post('question')
  async createQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    return this.revisionService.createQuestion(createQuestionDto);
  }
}
