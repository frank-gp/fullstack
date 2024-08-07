## cmd command

```bash

npm init -y
tsc --init

npm start
npx nodemon

npm install -g ts-node-dev
ts-node-dev --respawn resume/monolito_homework_simple.ts
```

## package.json

```json
{
  "dependencies": {
    "@types/express": "^4.17.21",
    "dotenv": "^16.4.5",
    "express": "^4.19.2"
  }
}
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "esModuleInterop": true
  }
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
