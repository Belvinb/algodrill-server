import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  Difficulty,
  RevisionLevel,
  Type,
} from 'src/common/enums/revision.enum';

export type QuestionDocument = HydratedDocument<Question>;

@Schema({
  timestamps: true,
})
export class Question {
  @Prop()
  question: string;
  @Prop()
  userId: string;
  @Prop()
  revisionLevel: RevisionLevel;

  @Prop()
  nextRevisionDate: Date;
  @Prop()
  difficulty: Difficulty;
  @Prop()
  type: Type;

  @Prop()
  notes: string;

  // @Prop()
  // createdAt: Date;
  // @Prop()
  // updatedAt: Date;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
