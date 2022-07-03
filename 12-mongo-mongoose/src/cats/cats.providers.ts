import { Mongoose } from 'mongoose';
import { CatSchema } from './schemas/cat.schem';

export const catsProviders = [
    {
        provide: 'CAT_MODEL',
        inject: ['DATABASE_CONNECTION'],
        useFactory: (mongoose: Mongoose) => mongoose.model('Cat', CatSchema),
    },
];