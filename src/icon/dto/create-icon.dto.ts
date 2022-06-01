import { IsOptional, IsString } from 'class-validator';

export class RawCreateIconDTO {
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString({ each: true })
  readonly keywords: string[] = [];
}

export class CreateIconDTO extends RawCreateIconDTO {
  @IsString()
  readonly path: string;
}
