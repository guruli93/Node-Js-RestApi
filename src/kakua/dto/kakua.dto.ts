import { IsString, IsOptional } from 'class-validator';

export class KakuaDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsOptional()
  createdAt?: Date; // Optional, typically set on the server side
}
