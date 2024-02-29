import { User } from '@prisma/client';
import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @Length(3)
  @IsNotEmpty()
  name: string;

  @IsString()
  emoji: string;

  @IsString()
  color: string;

  user: User;
}
