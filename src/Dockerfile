# Usa una imagen de Node.js
FROM node:18

# Crea un directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package*.json ./
COPY . .

# Instala dependencias
RUN npm install

# Expone el puerto
EXPOSE 4000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
