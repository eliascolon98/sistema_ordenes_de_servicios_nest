import {PartialType} from '@nestjs/mapped-types'
import { createTechnicaltDto } from './create-technical-dto';

export class editTechnicaltDto extends PartialType(createTechnicaltDto){}