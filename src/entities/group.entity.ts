import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from './base.entity';
import { SchemaTypes } from 'mongoose';
import { Student } from './student.entity';
import { Course } from './course.entity';
import { Teacher } from './teacher.entity';

@Schema({ collection: 'group' })
export class Group extends BaseEntity {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: SchemaTypes.ObjectId, ref: Course.name })
  course: Course;

  @Prop({
    type: [SchemaTypes.ObjectId],
    ref: Student.name,
    default: () => [],
  })
  students: Student[];

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: Teacher.name,
    required: true,
  })
  teacher: String;

  year: string;
}
export const GroupSchema = SchemaFactory.createForClass(Group);
