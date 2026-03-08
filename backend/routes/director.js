import { Router } from "express";
import {getDirector, getDirectorById, createDirector, updateDirector, deleteDirector} from "../controllers/directorController.js";


const router = Router(); //Aqui almacenamos el enrutamiento de las rutas, es decir, cada vez que queramos crear una ruta nueva, lo vamos a hacer a traves de este objeto router

//GET /api/directores
router.get("/", getDirector); //Cuando se haga una peticion get a la ruta "/api/directores", se va a ejecutar la funcion getDirector que esta importada desde el controlador, esta funcion se encarga de obtener todos los directores de la base de datos y enviarlos como respuesta al cliente

//POST /api/directores
router.post("/", createDirector); //Cuando se haga una peticion post a la ruta "/api/directores", se va a ejecutar la funcion createDirector que esta importada desde el controlador, esta funcion se encarga de crear un nuevo director en la base de datos con los datos que se le envien en el cuerpo de la peticion

//GET /api/directores/:id
router.get("/:id", getDirectorById); //Cuando se haga una peticion get a la ruta "/api/directores/:id", se va a ejecutar la funcion getDirectorById que esta importada desde el controlador, esta funcion se encarga de obtener un director de la base de datos por su id y enviarlo como respuesta al cliente

//PUT /api/directores/:id
router.put("/:id", updateDirector); //Cuando se haga una peticion put a la ruta "/api/directores/:id", se va a ejecutar la funcion updateDirector que esta importada desde el controlador, esta funcion se encarga de actualizar un director en la base de datos por su id con los datos que se le envien en el cuerpo de la peticion

//DELETE /api/directores/:id
router.delete("/:id", deleteDirector); //Cuando se haga una peticion delete a la ruta "/api/directores/:id", se va a ejecutar la funcion deleteDirector que esta importada desde el controlador, esta funcion se encarga de eliminar un director de la base de datos por su id

export default router; //Exportamos el router para poder usarlo en otros archivos, como en index.js donde lo vamos a importar y usar para definir las rutas de nuestra aplicacion
