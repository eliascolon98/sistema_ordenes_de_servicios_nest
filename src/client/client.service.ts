import { Injectable } from '@nestjs/common';
import { createClientDto } from './dtos';
import { editClientDto } from './dtos/edit-client-dto';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { Client } from '../entities/client.entity';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class ClientService {

    constructor( 
        @InjectRepository(Client)
        private readonly ClientRepository: Repository<Client>
    ) {}
    
    async postOne(dto : createClientDto){
        const client = this.ClientRepository.create(dto as any);
        return await this.ClientRepository.save(client)
    }

    async getAll() : Promise<Client[]> {
        return await this.ClientRepository.find()
    }

    async getOne(id: number){
        const client =  await this.ClientRepository.findOneBy({id: id})
        if(!client) throw new NotFoundException()
        return client
    }

    async putOne(id: number, dto: editClientDto){
        const client =  await this.ClientRepository.findOneBy({id: id})
        if(!client) throw new NotFoundException()
        
        const editClient = Object.assign(client, dto);
        return await this.ClientRepository.save(editClient);
    }

    
    
    async deleteOne(id: number){
        return await this.ClientRepository.delete(id)
    }
}
