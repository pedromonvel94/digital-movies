import { Router } from "express";
import { getTipo, getTipoById, createTipo, updateTipo, deleteTipo } from "../controllers/tipoController.js";

const router = Router(); //Aqui almacenamos el enrutamiento de las rutas, es decir, cada vez que queramos crear una ruta nueva, lo vamos a hacer a traves de este objeto router

//GET /api/tipos
router.get("/", getTipo); //Cuando se haga una peticion get a la ruta "/api/tipos", se va a ejecutar la funcion getTipo que esta importada desde el controlador, esta funcion se encarga de obtener todos los tipos de la base de datos y enviarlos como respuesta al cliente

//POST /api/tipos
router.post("/", createTipo); //Cuando se haga una peticion post a la ruta "/api/tipos", se va a ejecutar la funcion createTipo que esta importada desde el controlador, esta funcion se encarga de crear un nuevo tipo en la base de datos con los datos que se le envien en el cuerpo de la peticion

//GET /api/tipos/:id
router.get("/:id", getTipoById); //Cuando se haga una peticion get a la ruta "/api/tipos/:id", se va a ejecutar la funcion getTipoById que esta importada desde el controlador, esta funcion se encarga de obtener un tipo de la base de datos por su id y enviarlo como respuesta al cliente

//PUT /api/tipos/:id
router.put("/:id", updateTipo); //Cuando se haga una peticion put a la ruta "/api/tipos/:id", se va a ejecutar la funcion updateTipo que esta importada desde el controlador, esta funcion se encarga de actualizar un tipo en la base de datos por su id con los datos que se le envien en el cuerpo de la peticion

//DELETE /api/tipos/:id
router.delete("/:id", deleteTipo); //Cuando se haga una peticion delete a la ruta "/api/tipos/:id", se va a ejecutar la funcion deleteTipo que esta importada desde el controlador, esta funcion se encarga de eliminar un tipo de la base de datos por su id

export default router; //Exportamos el router para poder usarlo en otros archivos, como en index.js donde lo vamos a importar y usar para definir las rutas de nuestra aplicacion
