import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import {
  IsOptional,
    IsString
  } from 'class-validator';

export class createTechnicaltDto{
    @IsString()
    @ApiProperty()
    name: string;
    @IsString()
    @ApiProperty()
    @IsOptional()
    status: boolean;
}