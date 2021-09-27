import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// MongoDB User model schema defining.
@Schema({ collection: 'scrapper-api' })
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  created_at: string;
  @Prop({ required: true })
  updated_at: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
