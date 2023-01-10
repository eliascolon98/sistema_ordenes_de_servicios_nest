import { Controller, Get, Put, Param, Body, Post } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { ServiceService } from './service.service';
import { createServiceDto, editServiceDto } from './dto';
// import crypto from 'crypto';
import { Technical } from '../entities/technical.entity';


@Controller('service')
export class ServiceController {
    constructor(private readonly serviceServices: ServiceService) { }

    @Get()
    async findAll() {

        const services = await this.serviceServices.getAll();
     
        // Recorremos el servicio para crear un objeto con los datos que mostraremos
        const servicesData = services.map(service => ({
            id: service.id,
            token: service.token,
            descripcion: service.description,
            estado: service.status,
            cliente: service.client.name,
            TecnicoAsigado: service.technical.name,
        }));

        return {
            message: 'Success',
            servicesData
        }
    }

    @Get(':id/technical')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        const data = await this.serviceServices.getOne(id);
        if(data.length == 0) return {message: 'Usted no tiene ningún servicio asignado.'};

        return {
            message: 'Success',
            data
        }
    }

    @Post()
    async createOne(@Body() body) {

        const { id_client, description } = body;
        const token = this.genearToken();
        const id_technical: any = await this.retortarTecnicoAleatorio();
        const status = 'In process';
        const arrayDto: createServiceDto = { token: token, client: id_client, description: description, technical: id_technical, status: status };
       
        const data = await this.serviceServices.postOne(arrayDto);
        return {
            message: 'Service created successfully',
            data
        };
    }

    @Put(':id')
    async putOne(@Param('id', ParseIntPipe) id: number, @Body() dto: editServiceDto) {
        const data = await this.serviceServices.putOne(id, dto);
        return {
            message: 'Success',
            data
        }
    }

    // Funcion para retornar el id de un tecnico de forma aleatoria
    retortarTecnicoAleatorio = async () => {
        // Consultar technicals disponibles
        const technicals = await Technical.find({
            where: {
                status: true
            }
        })

        // Creamos un array donde se almacenen los Id de los technicals disponibles
        const arrayIdTechnical = [];
        for (const technical of technicals) {
            arrayIdTechnical.push(technical.id);
        }

        // Buscamos un Id de forma aleatoria de los technicals disponibles
        const randomIndex = Math.floor(Math.random() * arrayIdTechnical.length);
        return arrayIdTechnical[randomIndex];

    }

    genearToken = (strength = 64) => {
        // return crypto.randomBytes(32).toString('hex');

        const permittedChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        const inputLength = permittedChars.length;
        let randomString = '';
        for (let i = 0; i < strength; i++) {
            const randomCharacter = permittedChars[Math.floor(Math.random() * inputLength)];
            randomString += randomCharacter;
        }
        return randomString;

    }
}
