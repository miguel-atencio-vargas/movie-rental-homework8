import { Expose } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class PatchMovieDto {
  @Expose()
  @IsNotEmpty()
  title: string;
  @Expose()
  @IsNotEmpty()
  description?: string;
  @Expose()
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsBoolean()
  availability: boolean;
}