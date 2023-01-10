import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import {
    IsString,
    IsInt,
    IsNotEmpty,
  } from 'class-validator';

export class createServiceDto{
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    client: number;
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    technical: number;
    @IsString()
    @ApiProperty()
    description: string;
    @IsString()
    @ApiProperty()
    token: string;
    @IsString()
    @ApiProperty()
    status: string;
}
