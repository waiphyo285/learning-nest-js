import { Module } from '@nestjs/common';
import { DateScalar } from 'src/common/scalars/data.scalar';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';

@Module({
  providers: [
    RecipesService,
    RecipesResolver,
    DateScalar
  ]
})

export class RecipesModule { }
