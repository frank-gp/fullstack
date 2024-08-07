## cmd command

```bash

npm init -y
tsc --init

npm start

```

## package.json

```json
{
  "name": "back",
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
    "express": "^4.19.2"
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

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2016",
    /* Modules */
    "module": "commonjs",
    "rootDir": "./src",
    /* Emit */
    "outDir": "./dist",
    /* Interop Constraints */
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    /* Type Checking */
    "strict": true,
    /* Completeness */
    "skipLibCheck": true
  },
  "include": ["./src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## nodemon.json

```json
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node src/index.ts"
}
```

### .env file

```.env
PORT=3000
```

### scaffolding backend

```
back
├── src
│   ├── config
│   │   └── envs.ts
│   ├── controllers
│   │   ├── turnsController.ts
│   │   └── usersController.ts
│   ├── dto
│   │   └── UserDto.ts
│   ├── interfaces
│   │   └── IUser.ts
│   ├── middleware
│   │   └── auth.ts
│   ├── routes
│   │   ├── indexRouter.ts
│   │   ├── turnsRouter.ts
│   │   └── usersRouter.ts
│   ├── index.ts
│   └── server.ts
├── .env
├── nodemon.json
├── package.json
├── package-lock.json
└── tsconfig.json

front
└── index.js

.gitignore


```
