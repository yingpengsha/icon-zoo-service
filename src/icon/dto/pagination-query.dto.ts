import { Type } from 'class-transformer';
import { IsOptional, IsPositive, IsString } from 'class-validator';

export class PaginationQueryDTO {
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  readonly pageNo: number = 1;

  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  readonly pageSize: number = 10;

  @IsOptional()
  @IsString()
  readonly name: string;
}
