import { Router } from "express";
import {getProductora, getProductoraById, createProductora, updateProductora, deleteProductora} from "../controllers/productoraController.js";


const router = Router(); //Aqui almacenamos el enrutamiento de las rutas, es decir, cada vez que queramos crear una ruta nueva, lo vamos a hacer a traves de este objeto router

//GET /api/productoras
router.get("/", getProductora); //Cuando se haga una peticion get a la ruta "/api/productoras", se va a ejecutar la funcion getProductora que esta importada desde el controlador, esta funcion se encarga de obtener todas las productoras de la base de datos y enviarlas como respuesta al cliente

//POST /api/productoras
router.post("/", createProductora); //Cuando se haga una peticion post a la ruta "/api/productoras", se va a ejecutar la funcion createProductora que esta importada desde el controlador, esta funcion se encarga de crear una nueva productora en la base de datos con los datos que se le envien en el cuerpo de la peticion

//GET /api/productoras/:id
router.get("/:id", getProductoraById); //Cuando se haga una peticion get a la ruta "/api/productoras/:id", se va a ejecutar la funcion getProductoraById que esta importada desde el controlador, esta funcion se encarga de obtener una productora de la base de datos por su id y enviarla como respuesta al cliente

//PUT /api/productoras/:id
router.put("/:id", updateProductora); //Cuando se haga una peticion put a la ruta "/api/productoras/:id", se va a ejecutar la funcion updateProductora que esta importada desde el controlador, esta funcion se encarga de actualizar una productora en la base de datos por su id con los datos que se le envien en el cuerpo de la peticion

//DELETE /api/productoras/:id
router.delete("/:id", deleteProductora); //Cuando se haga una peticion delete a la ruta "/api/productoras/:id", se va a ejecutar la funcion deleteProductora que esta importada desde el controlador, esta funcion se encarga de eliminar una productora de la base de datos por su id

export default router; //Exportamos el router para poder usarlo en otros archivos, como en index.js donde lo vamos a importar y usar para definir las rutas de nuestra aplicacion
