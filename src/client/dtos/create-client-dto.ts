import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import {
    IsString,
    IsInt,
    IsEmail,
    IsNotEmpty,
  } from 'class-validator';

export class createClientDto{
    @IsString()
    @ApiProperty()
    name: string;
    @IsString()
    @ApiProperty()
    adress: string;
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    mail: string;
    @ApiProperty()
    @IsInt()
    phone: number;
}