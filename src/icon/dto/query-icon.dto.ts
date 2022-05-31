import { IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryIconDTO {
  @IsOptional()
  @IsNumber()
  readonly pageNo: number = 1;

  @IsOptional()
  @IsNumber()
  readonly pageSize: number = 10;

  @IsOptional()
  @IsString()
  readonly name: string;
}
