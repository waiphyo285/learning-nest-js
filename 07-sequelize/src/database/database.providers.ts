import { Sequelize } from 'sequelize-typescript';

/**
 * SEQUELIZE variable is stored in a file named
 * 'constants' so it can be easily reused anywhere
 * without being subject to human error.
 */

import { User } from '../users/models/user.model';
import { SEQUELIZE } from '../utils/constants';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: '07_nest_sequelize',
      });

      /**
       * Add Models Here
       * ===============
       * You can add the models to
       * Sequelize later on.
       */
      sequelize.addModels([User]);

      await sequelize.sync();
      return sequelize;
    },
  },
];
