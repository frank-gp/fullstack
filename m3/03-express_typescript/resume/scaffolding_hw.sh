#!/bin/bash

# Crear directorios
mkdir -p src/config src/controllers src/dto src/interfaces src/middleware src/routes

# Crear archivos
touch src/config/envs.ts
touch src/controllers/turnsController.ts
touch src/controllers/usersController.ts
touch src/dto/UserDto.ts
touch src/interfaces/IUser.ts
touch src/middleware/auth.ts
touch src/routes/indexRouter.ts
touch src/routes/turnsRouter.ts
touch src/routes/usersRouter.ts
touch src/index.ts
touch src/server.ts

# Contenido para algunos archivos
cat <<EOF > .env
PORT=3000
EOF

cat <<EOF > .gitignore
node_modules
.env
EOF


echo "Estructura de carpetas y archivos creada con éxito."
