import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class AppDto {
  @IsNotEmpty()
  @IsString()
  value: string;

  @IsOptional()
  @IsNumber()
  ttl: number;
}
