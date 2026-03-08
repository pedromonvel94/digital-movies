import { Router } from "express";
import {getGenero, createGenero, getGeneroById, updateGenero, deleteGenero} from "../controllers/generoController.js";


const router = Router(); //Aqui almacenamos el enrutamiento de las rutas, es decir, cada vez que queramos crear una ruta nueva, lo vamos a hacer a traves de este objeto router

//GET /api/generos
router.get("/", getGenero); //Cuando se haga una peticion get a la ruta "/api/generos", se va a ejecutar la funcion getGenero que esta importada desde el controlador, esta funcion se encarga de obtener todos los generos de la base de datos y enviarlos como respuesta al cliente

//POST /api/generos
router.post("/", createGenero); //Cuando se haga una peticion post a la ruta "/api/generos", se va a ejecutar la funcion createGenero que esta importada desde el controlador, esta funcion se encarga de crear un nuevo genero en la base de datos con los datos que se le envien en el cuerpo de la peticion

//GET /api/generos/:id
router.get("/:id", getGeneroById); //Cuando se haga una peticion get a la ruta "/api/generos/:id", se va a ejecutar la funcion getGeneroById que esta importada desde el controlador, esta funcion se encarga de obtener un genero de la base de datos por su id y enviarlo como respuesta al cliente

//PUT /api/generos/:id
router.put("/:id", updateGenero); //Cuando se haga una peticion put a la ruta "/api/generos/:id", se va a ejecutar la funcion updateGenero que esta importada desde el controlador, esta funcion se encarga de actualizar un genero en la base de datos por su id con los datos que se le envien en el cuerpo de la peticion

//DELETE /api/generos/:id
router.delete("/:id", deleteGenero); //Cuando se haga una peticion delete a la ruta "/api/generos/:id", se va a ejecutar la funcion deleteGenero que esta importada desde el controlador, esta funcion se encarga de eliminar un genero de la base de datos por su id

export default router; //Exportamos el router para poder usarlo en otros archivos, como en index.js donde lo vamos a importar y usar para definir las rutas de nuestra aplicacion
