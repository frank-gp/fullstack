```bash
# https://typeorm.io/#installation

npm install typeorm --save
npm install reflect-metadata --save
npm install pg --save

```

```js
import "reflect-metadata";
```

```json
// package.json
{
  "name": "l3",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "pg": "^8.11.5",
    "reflect-metadata": "^0.2.2",
    "typeorm": "^0.3.20"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^20.12.7",
    "morgan": "^1.10.0",
    "nodemon": "^3.1.0",
    "ts-node": "^10.9.2"
  }
}
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "lib": ["ES6"],
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "strictPropertyInitialization": false
  }
}
```

```ts
// data-source.ts
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "demo_typeorm",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
```

```bash
# database conect
psql -U postgres

# list database
\l

# display tables
\dt

# create db
CREATE DATABASE demo_typeorm;

SELECT * FROM vehicles_table;
SELECT * FROM users_table;
```

https://typeorm.io/#create-a-model
https://typeorm.io/example-with-express
