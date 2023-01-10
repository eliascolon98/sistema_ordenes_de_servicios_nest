import { Controller, Get, Put, Delete, Param, Body, Post } from '@nestjs/common';
import { createClientDto, editClientDto } from './dtos'
import { ParseIntPipe } from '@nestjs/common/pipes';
import { ClientService } from './client.service';
import { ApiTags } from '@nestjs/swagger/dist';

@ApiTags('Clients')
@Controller('client')
export class clientController {

    constructor(private readonly ClientServices: ClientService){}

    @Get()
    async findAll(){
        const data = await this.ClientServices.getAll();
        return{
            message: 'Success',
            data
        }
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        const data = await this.ClientServices.getOne(id);
        return{
            message: 'Success',
            data
        }
    }

    @Post()
    async createOne(@Body() dto: createClientDto) {
        const data = await this.ClientServices.postOne(dto);
        return{
            message: 'Success',
            data
        };
    }

    @Put(':id')
    async putOne(@Param('id', ParseIntPipe) id: number, @Body() dto: editClientDto) {
        const data = await this.ClientServices.putOne(id, dto);
        return{
            message: 'Success',
            data
        }
    }

    @Delete(':id')
    async deleteOne(@Param('id', ParseIntPipe) id: number) {
        const data = await this.ClientServices.deleteOne(id);
        return{
            message: 'Client deleted successfully',
            data
        }
    }
}
