import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  FullName: string;
  @Prop()
  Email: string;
  @Prop()
  PasswordHashed: string;
  @Prop()
  IsAdmin: boolean;
  @Prop()
  IsDeleted: boolean;
}

export const UserSchema = SchemaFactory.createForClass()
