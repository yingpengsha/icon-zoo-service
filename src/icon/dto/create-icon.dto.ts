import { IsString } from 'class-validator';

export class CreateIconDTO {
  @IsString()
  readonly name: string;

  @IsString()
  readonly path: string;

  @IsString({ each: true })
  readonly keywords: string[];
}
