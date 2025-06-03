import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type AnswerDocument = HydratedDocument<Answer>;

@Schema({ timestamps: true })
export class Answer {
  @Prop()
  answer: string;
  @Prop()
  questionId: string;
  @Prop()
  language: string;
  // @Prop()
  // createdAt: Date;
  // @Prop()
  // updatedAt: Date;
}
export const AnswerSchema = SchemaFactory.createForClass(Answer);
