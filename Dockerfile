# Usa una imagen base de Node.js
FROM node:18

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . .

# Establece el archivo principal en la carpeta src
CMD ["node", "src/app.js"]

# Expone el puerto 4000 para la API
EXPOSE 4000
