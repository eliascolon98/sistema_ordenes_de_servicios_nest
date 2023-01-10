import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { createClientDto } from './create-client-dto';
import {PartialType} from '@nestjs/mapped-types'

export class editClientDto extends PartialType(createClientDto){}