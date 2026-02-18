//importamos express
import express from "express"

//1. Creamos una instancia de nuestra aplicacion
const app = express() 
const PORT = 3001

app.get("/home", (req, res) => { //El get lo que hace es solicitar un recurso, como primer parametro hay que pasarle la ruta, como en este caso quiero que sea la ruta principal, le coloco "/", como segundo parametro le pasamos una funcion flecha que recibira como parametros un objeto llamado request que le llamaremos req, y un response que le llamaremos res, basicamente uno es la peticion y el otro es la respuesta que nos envia el servidor, mejor dicho la peticion que recibimos desde el front se gestiona como un req, mientras que la respuesta que le debemos enviar al front es la res
    res.send("<h1>Hola, mundo</h1>") 
}) // Este get significa que cuando entremos a https://localhost:3001 y al final le  coloque la "/" dejandolo https://localhost:3001/home, significa que vamos a estar enviando una peticion get hacia esa direccion, y esa peticion la vamos a estar gestionando desde la funcion donde recibo los req y res

//Gracias a el objeto app podemos levantar nuestro servidor
app.listen(PORT, () =>{ //el objeto app tiene un metodo listen(), el cual recibe como primer parametro un numero de puerto y luego se le pasa una funcion de tipo flecha
    console.log('Escuchando en el https://localhost:3001')
})