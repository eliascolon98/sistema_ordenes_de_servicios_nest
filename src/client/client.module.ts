import { Module } from '@nestjs/common';
import { clientController } from './client.controller';
import { ClientService } from './client.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../entities/client.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Client])
  ],
  controllers: [clientController],
  providers: [ClientService],
})
export class clientModule {}
