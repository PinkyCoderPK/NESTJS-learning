import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ require: true })
  email: string;

  @Prop({ require: true })
  password: string;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  phone: number;

  @Prop()
  address: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updateAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
