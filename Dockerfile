# Usa una imagen base de Node.js
FROM node:18

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .

# Expone el puerto (asegúrate de que coincida con el configurado en tu aplicación)
EXPOSE 4000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
