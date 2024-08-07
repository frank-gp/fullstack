#!/bin/bash

# Crear directorios
mkdir -p src/config src/controllers src/dto src/interfaces src/middleware src/routes src/services
mkdir -p dist

# Crear archivos
touch src/config/envs.ts
touch src/controllers/usersController.ts
touch src/dto/UserDto.ts
touch src/interfaces/IUser.ts
touch src/middleware/auth.ts
touch src/routes/index.ts
touch src/services/usersService.ts
touch src/index.ts src/server.ts
touch .env .gitignore nodemon.json

cat <<EOF > .env
PORT=3000
EOF

cat <<EOF > .gitignore
node_modules
.env
EOF


echo "Estructura de carpetas y archivos creada con éxito."
