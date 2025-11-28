import { IsObject, IsOptional, IsString } from 'class-validator';

export class UpdateDesignBlockDto {
  @IsOptional()
  @IsString()
  label?: string;

  @IsOptional()
  @IsObject()
  content?: Record<string, unknown>;
}
