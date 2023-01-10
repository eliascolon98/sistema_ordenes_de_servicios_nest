import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from '../entities/service.entity';
import { ServiceController } from './service.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([Service])
  ],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}
