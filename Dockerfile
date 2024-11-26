# Usa una imagen oficial de Node.js
FROM node:16

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Instalar Nodemon globalmente para `npm run dev`
RUN npm install -g nodemon

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto de la API
EXPOSE 4000

# Comando para iniciar la API en modo desarrollo
CMD ["npm", "run", "dev"]
