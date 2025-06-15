import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  Difficulty,
  RevisionLevel,
  Type,
} from '../../common/enums/revision.enum';

export type QuestionDocument = HydratedDocument<Question>;

@Schema({
  timestamps: true,
})
export class Question {
  @Prop()
  question: string;
  @Prop()
  userId: string;
  @Prop({ enum: RevisionLevel, type: String })
  revisionLevel: RevisionLevel;

  @Prop()
  nextRevisionDate: Date;
  @Prop({ enum: Difficulty, type: String })
  difficulty: Difficulty;
  @Prop({ enum: Type, type: String })
  type: Type;

  @Prop()
  notes: string;

  // @Prop()
  // createdAt: Date;
  // @Prop()
  // updatedAt: Date;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
