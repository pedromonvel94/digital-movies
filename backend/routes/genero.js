import { Router } from "express";
import {getGenero, createGenero} from "../controllers/generoController.js";


const router = Router(); //Aqui almacenamos el enrutamiento de las rutas, es decir, cada vez que queramos crear una ruta nueva, lo vamos a hacer a traves de este objeto router

//GET /api/generos
router.get("/", getGenero); //Cuando se haga una peticion get a la ruta "/api/generos", se va a ejecutar la funcion getGenero que esta importada desde el controlador, esta funcion se encarga de obtener todos los generos de la base de datos y enviarlos como respuesta al cliente

//POST /api/generos
router.post("/", createGenero); //Cuando se haga una peticion post a la ruta "/api/generos", se va a ejecutar la funcion createGenero que esta importada desde el controlador, esta funcion se encarga de crear un nuevo genero en la base de datos con los datos que se le envien en el cuerpo de la peticion

export default router; //Exportamos el router para poder usarlo en otros archivos, como en index.js donde lo vamos a importar y usar para definir las rutas de nuestra aplicacion
