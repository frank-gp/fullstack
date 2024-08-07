```bash
npm i -g @nestjs/cli

nest -v

nest new nest-demo

npm install uuid
npm install dotenv


npm i @nestjs/typeorm @nestjs/config typeorm pg

npm run migration:create src/migrations/prueba
npm run build
npm run migration:run

npm run build
npm run migration:generate src/migrations/initial
npm run build
npm run migration:run

npm run start:dev


# Lecture 6
npm i class-validator class-transformer

#L7
npm i -D @types/multer
npm i cloudinary buffer-to-stream

# L8
npm install bcrypt
npm install @nestjs/swagger
npm install --save @nestjs/jwt

https://jwt.io/


#L9
npm install express-openid-connect


https://manage.auth0.com/dashboard/us/dev-md7dr4y44z6j0oe5/applications/wLlG1KN2upncpRljIAnbwLIQf1WTMcF8/quickstart/express/steps/2
http://localhost:3000/users/auth0/protected
http://localhost:3000/login
http://localhost:3000/logout



#10
 npm run test
 npm run test:watch
  npm run test:e2e
  npm run test:e2ewatch
# "test:e2ewatch": "jest --config ./test/jest-e2e.json --watch",



