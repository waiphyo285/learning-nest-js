import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { Photo } from './photo/entities/photo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: '11-mongo-typeorm',
      entities: [Photo],
      synchronize: true,
    }),
    PhotoModule,
  ],
})

export class AppModule { }