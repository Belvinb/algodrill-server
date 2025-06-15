import { ApiProperty } from '@nestjs/swagger';
import {
  Difficulty,
  RevisionLevel,
  Type,
} from '../../common/enums/revision.enum';

export class CreateQuestionDto {
  @ApiProperty()
  question: string;

  @ApiProperty()
  revisionLevel: RevisionLevel;
  @ApiProperty()
  nextRevisionDate: Date;
  @ApiProperty()
  difficulty: Difficulty;
  @ApiProperty()
  type: Type;
  @ApiProperty()
  notes: string;

  @ApiProperty()
  answers: string[];
  @ApiProperty()
  language: string;
}
