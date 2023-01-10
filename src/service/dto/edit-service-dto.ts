import {PartialType} from '@nestjs/mapped-types'
import { createServiceDto } from './create-service.dto';

export class editServiceDto extends PartialType(createServiceDto){}