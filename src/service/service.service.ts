import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from '../entities/service.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common/exceptions';
import { createServiceDto, editServiceDto } from './dto/';


@Injectable()
export class ServiceService {
    constructor(
        @InjectRepository(Service)
        private readonly serviceRepository: Repository<Service>
    ) { }

    async postOne(dto: createServiceDto) {
        const service = this.serviceRepository.create(dto as any);
        return await this.serviceRepository.save(service);
    }

    async getAll(): Promise<Service[]> {

        const services = await this.serviceRepository.find({
            // Seleccionar solo el token, el estado y la descripción
            select: ['id', 'token', 'status', 'description'],
            // Seleccionar las relaciones con el cliente y el técnico
            relations: {
                client: true,
                technical: true,

            },
        });

        return services
    }

    async getOne(id: number) {
        
        // Seleccionamos la relación cleinte del servicio donde el tecnico sea igual al Id
        const services = await this.serviceRepository.find({
            relations: {
                client: true,
            },
            where:{
                technical: {id: id},
            }
        });

        if (!services) throw new NotFoundException
        
        const servicesData = services.map(service => ({
            id: service.id,
            token: service.token,
            descripcion: service.description,
            estado: service.status,
            cliente: service.client.name,
        }));
       
        
        return servicesData
    }

    async putOne(id: number, dto: editServiceDto) {
        const service = await this.serviceRepository.findOneBy({ id: id })
        if (!service) throw new NotFoundException()

        const editClient = Object.assign(service, dto);
        return await this.serviceRepository.save(editClient);
    }



}
