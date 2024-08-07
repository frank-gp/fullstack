// back/src/config/typeorm.ts

import { DataSource, DataSourceOptions } from 'typeorm';
import { config as dotevn } from 'dotenv';
import { registerAs } from '@nestjs/config';

dotevn({ path: '.env' });

console.info('dropSchema: ', process.env.DROPSCHEMA);
console.info('DB_TYPE: ', process.env.DB_TYPE);
// console.info("EMAIL_USER: ", process.env.EMAIL_USER)

const typeOrmConfig = {
  type: process.env.DB_TYPE || 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: (process.env.DB_PORT as unknown as number) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'my_db',
  // dropSchema: process.env.DROPSCHEMA === 'true', // Convert string to boolean
  autoloadEntities: true,
  //logging: true,
  logging: ['error'],
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  // synchronize: true,
};

export default registerAs('typeorm', () => typeOrmConfig);
export const conectionSource = new DataSource(
  typeOrmConfig as DataSourceOptions,
);
