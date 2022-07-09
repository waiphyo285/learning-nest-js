import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
// modules
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
// services
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
// strategies
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
// constants
import { jwtConstants } from './constants';


@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    UsersService,
    AuthService,
    LocalStrategy,
    JwtStrategy
  ],
  exports: [AuthService],
})

export class AuthModule { }