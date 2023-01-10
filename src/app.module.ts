import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { clientModule } from './client/client.module';
import { ConfigService } from '@nestjs/config/dist';
import { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } from './config/constants';
import { TechnicalModule } from './technical/technical.module';
import { ServiceModule } from './service/service.module';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
        inject: [ConfigService],
        useFactory: (config : ConfigService) =>({
          type: 'postgres',
          host: config.get<string>(DB_HOST),
          port: parseInt(config.get<string>(DB_PORT)),
          username: config.get<string>(DB_USER),
          password: config.get<string>(DB_PASS),
          database: config.get<string>(DB_NAME),
          entities: [ __dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true, 
          autoLoadEntities: true,
        })
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),

    clientModule,
    TechnicalModule,
    ServiceModule
  ],
  
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {

}
