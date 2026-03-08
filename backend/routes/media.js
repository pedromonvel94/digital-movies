import { Router } from "express";
import {getMedia, getMediaById, createMedia, updateMedia, deleteMedia} from "../controllers/mediaController.js";


const router = Router(); //Aqui almacenamos el enrutamiento de las rutas, es decir, cada vez que queramos crear una ruta nueva, lo vamos a hacer a traves de este objeto router

//GET /api/medias
router.get("/", getMedia); //Cuando se haga una peticion get a la ruta "/api/medias", se va a ejecutar la funcion getMedia que esta importada desde el controlador, esta funcion se encarga de obtener todas las medias de la base de datos y enviarlas como respuesta al cliente

//POST /api/medias
router.post("/", createMedia); //Cuando se haga una peticion post a la ruta "/api/medias", se va a ejecutar la funcion createMedia que esta importada desde el controlador, esta funcion se encarga de crear una nueva media en la base de datos con los datos que se le envien en el cuerpo de la peticion

//GET /api/medias/:id
router.get("/:id", getMediaById); //Cuando se haga una peticion get a la ruta "/api/medias/:id", se va a ejecutar la funcion getMediaById que esta importada desde el controlador, esta funcion se encarga de obtener una media de la base de datos por su id y enviarla como respuesta al cliente

//PUT /api/medias/:id
router.put("/:id", updateMedia); //Cuando se haga una peticion put a la ruta "/api/medias/:id", se va a ejecutar la funcion updateMedia que esta importada desde el controlador, esta funcion se encarga de actualizar una media en la base de datos por su id con los datos que se le envien en el cuerpo de la peticion

//DELETE /api/medias/:id
router.delete("/:id", deleteMedia); //Cuando se haga una peticion delete a la ruta "/api/medias/:id", se va a ejecutar la funcion deleteMedia que esta importada desde el controlador, esta funcion se encarga de eliminar una media de la base de datos por su id

export default router; //Exportamos el router para poder usarlo en otros archivos, como en index.js donde lo vamos a importar y usar para definir las rutas de nuestra aplicacion
