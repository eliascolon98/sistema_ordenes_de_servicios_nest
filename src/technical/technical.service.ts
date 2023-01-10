import { Injectable } from '@nestjs/common';
import { Technical } from '../entities/technical.entity';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { createTechnicaltDto, editTechnicaltDto } from './dto';
import { Repository } from 'typeorm';


@Injectable()
export class TechnicalService {
    constructor( 
        @InjectRepository(Technical)
        private readonly technicalRepository: Repository<Technical>
    ) {}
    
    async postOne(dto : createTechnicaltDto){
        const technical = this.technicalRepository.create(dto as any);
        return await this.technicalRepository.save(technical)
    }

    async getAll() : Promise<Technical[]> {
        return await this.technicalRepository.find()
    }

    async getOne(id: number){
        const technical =  await this.technicalRepository.findOneBy({id: id})
        if(!technical) throw new NotFoundException()
        return technical
    }

    async putOne(id: number, dto: editTechnicaltDto){
        const technical =  await this.technicalRepository.findOneBy({id: id})
        if(!technical) throw new NotFoundException()
        
        const editTechnical = Object.assign(technical, dto);
        return await this.technicalRepository.save(editTechnical);
    }

    
    
    async deleteOne(id: number){
        return await this.technicalRepository.delete(id)
    }
}
