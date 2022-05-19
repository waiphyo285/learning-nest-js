import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './users/users.controller';
import { UserService } from './users/users.service';
import { UserModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UserModule],
  // controllers: [UserController],
  // providers: [UserService],
})
export class AppModule {}
