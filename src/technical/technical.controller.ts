import { Controller, Get, Put, Delete, Param, Body, Post } from '@nestjs/common';
import { TechnicalService } from './technical.service';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { createTechnicaltDto, editTechnicaltDto } from './dto';
import { ApiTags } from '@nestjs/swagger/dist';

@ApiTags('Technicals')
@Controller('technical')
export class TechnicalController {

    constructor(private readonly technicalServices: TechnicalService){}

    @Get()
    async findAll(){
        const data = await this.technicalServices.getAll();
        return{
            message: 'Success',
            data
        }
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        const data = await this.technicalServices.getOne(id);
        return{
            message: 'Success',
            data
        }
    }

    @Post()
    async createOne(@Body() dto: createTechnicaltDto) {
        const data = await this.technicalServices.postOne(dto);
        return{
            message: 'Success',
            data
        };
    }

    @Put(':id')
    async putOne(@Param('id', ParseIntPipe) id: number, @Body() dto: editTechnicaltDto) {
        const data = await this.technicalServices.putOne(id, dto);
        return{
            message: 'Success',
            data
        }
    }

    @Delete(':id')
    async deleteOne(@Param('id', ParseIntPipe) id: number) {
        const data = await this.technicalServices.deleteOne(id);
        return{
            message: 'Technical deleted successfully',
            data
        }
    }
}
