//importamos express
import express from "express"
import dotenv from "dotenv"
import fs from "fs"


dotenv.config() //esto lo que hace es cargar las variables de entorno que tenemos en el archivo .env
const app = express() //1. Creamos una instancia de nuestra aplicacion
app.use(express.json()) //esto lo que hace es decirle a express que vamos a estar recibiendo peticiones con formato json, entonces cada vez que recibamos una peticion con formato json, express va a ser capaz de entenderla y procesarla correctamente

const PORT = process.env.PORT || 3001 //esto lo que hace es decirle a nuestra aplicacion que el puerto en el que va a estar escuchando es el que tenemos definido en la variable de entorno PORT, y si no tenemos esa variable de entorno definida, entonces va a usar el puerto 3001 por defecto

/*const readData = () => {
    try {
        const data = fs.readFileSync("./db/db.json");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error al leer el archivo:", error);
        return null;
    }
}

const writeData = (data) => {
    try {
        fs.writeFileSync("./db/db.json", JSON.stringify(data));
    } catch (error) {
        console.error("Error al escribir el archivo:", error);
        return null;
    }
}*/

app.get("/health", (req, res) => { //El get lo que hace es solicitar un recurso, como primer parametro hay que pasarle la ruta, como en este caso quiero que sea la ruta principal, le coloco "/", como segundo parametro le pasamos una funcion flecha que recibira como parametros un objeto llamado request que le llamaremos req, y un response que le llamaremos res, basicamente uno es la peticion y el otro es la respuesta que nos envia el servidor, mejor dicho la peticion que recibimos desde el front se gestiona como un req, mientras que la respuesta que le debemos enviar al front es la res
    res.json({ ok: true }) //con el res.json() lo que hacemos es enviar una respuesta en formato json, en este caso estamos enviando un objeto con una propiedad ok que tiene el valor true, esto es solo para probar que nuestro servidor esta funcionando correctamente
}) // Este get significa que cuando entremos a https://localhost:3000 y al final le  coloque la "/health" dejandolo https://localhost:3001/health, significa que vamos a estar enviando una peticion get hacia esa direccion, y esa peticion la vamos a estar gestionando desde la funcion donde recibo los req y res

app.get("/api/generos", (req, res) => {
    res("Hola mundo")
    res.send("<h1>Hola mundo</h1>")
})

app.get("/genero", (req, res) => {
    const data = readData();
    res.json(data.books)
})

//Gracias a el objeto app podemos levantar nuestro servidor
app.listen(PORT, () => { //el objeto app tiene un metodo listen(), el cual recibe como primer parametro un numero de puerto y luego se le pasa una funcion de tipo flecha
    console.log(`Escuchando en el http://localhost:${PORT}`)
})