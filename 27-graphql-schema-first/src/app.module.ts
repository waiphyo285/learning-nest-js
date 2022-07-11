import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { CatsModule } from './cats/cats.module';
import { OwnersModule } from './owners/owners.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts')
      },
      debug: true,
      playground: true,
    }),
    CatsModule,
    OwnersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
