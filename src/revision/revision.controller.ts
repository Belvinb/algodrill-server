import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { RevisionService } from './revision.service';
import { CreateQuestionDto } from './dto/question.dto';

import { Public } from 'src/auth/public.decorator';
import {
  Difficulty,
  RevisionLevel,
  Type,
} from 'src/common/enums/revision.enum';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('revision')
@UseInterceptors(CacheInterceptor)
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
