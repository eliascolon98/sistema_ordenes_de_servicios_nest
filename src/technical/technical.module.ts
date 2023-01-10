import { Module } from '@nestjs/common';
import { Technical } from '../entities/technical.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicalController } from './technical.controller';
import { TechnicalService } from './technical.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([Technical])
      ],
      controllers: [TechnicalController],
      providers: [TechnicalService],
})
export class TechnicalModule {}
