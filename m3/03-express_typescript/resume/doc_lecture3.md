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
.
├── dist
├── src
│   ├── config
│   │   └── envs.ts
│   ├── controllers
│   │   └── usersController.ts
│   ├── dto
│   │   └── UserDto.ts
│   ├── interfaces
│   │   └── IUser.ts
│   ├── middleware
│   │   └── auth.ts
│   ├── routes
│   │   └── index.ts
│   ├── services
│   │   └── usersService.ts
│   ├── index.ts
│   └── server.ts
├── .env
├── .gitignore
├── nodemon.json
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json


```
