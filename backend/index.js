//importamos express
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectMongo } from "./db/mongo.js"; //importamos la funcion que se encarga de conectar a la base de datos, esta funcion la encontramos en el archivo db.js que esta dentro de la carpeta db
import generoRoutes from "./routes/genero.js";
import directorRoutes from "./routes/director.js";
import productoraRoutes from "./routes/productora.js";
import tipoRoutes from "./routes/tipo.js";
import mediaRoutes from "./routes/media.js";

dotenv.config(); //esto lo que hace es cargar las variables de entorno que tenemos en el archivo .env
const app = express(); //1. Creamos una instancia de nuestra aplicacion
const PORT = process.env.PORT || 3001; //esto lo que hace es decirle a nuestra aplicacion que el puerto en el que va a estar escuchando es el que tenemos definido en la variable de entorno PORT, y si no tenemos esa variable de entorno definida, entonces va a usar el puerto 3001 por defecto

app.use(express.json()); //esto lo que hace es decirle a express que vamos a estar recibiendo peticiones con formato json, entonces cada vez que recibamos una peticion con formato json, express va a ser capaz de entenderla y procesarla correctamente
app.use(cors());

/* ROUTES */
app.use("/api/generos", generoRoutes);
app.use("/api/directores", directorRoutes);
app.use("/api/productoras", productoraRoutes);
app.use("/api/tipos", tipoRoutes);
app.use("/api/media", mediaRoutes);

connectMongo(); //llamamos a la funcion que se encarga de conectar a la base de datos, esta funcion la encontramos en el archivo db.js que esta dentro de la carpeta db

//Gracias a el objeto app podemos levantar nuestro servidor
app.listen(PORT, () => { //el objeto app tiene un metodo listen(), el cual recibe como primer parametro un numero de puerto y luego se le pasa una funcion de tipo flecha
    console.log(`Escuchando en el http://localhost:${PORT}`)
})