import mongoose from "mongoose"; //importo mongoose que es una libreria que permite usar metodos predefinidos para poder interactuar con mongoDb

const genero = new mongoose.Schema( //Este es como un molde para crear el modelo, un schema se usa para interactuar con una coleccion (tabla) de la base de datos de MongoDB y de esta forma poder definir la escructura de los documentos que quiero que se almacenen dentro de ella.
  {
    nombre: { type: String, required: [true, "El nombre es obligatorio"], trim: true, unique: true }, //Le indico a mongoose que quiero que el documento tenga el par clave-valor: nombre:valor y que ese valor cumpla con los requisitos que le coloque, osea que sea String, que sea required, que se le haga trim para eliminar espacios, y unique.
    estado: { type: String, enum: ["Activo", "Inactivo"], default: "Activo" }, //Le indico a mongoose que quiero que el documento tenga el par clave-valor: estado:valor y que ese valor cumpla con los requisitos que le coloque, osea que sea de tipo String, que solo pueda tener los valores "ACTIVO", "INACTIVO" (Que son los que se setean en el enum) y que por default sea ACTIVO
    descripcion: { type: String, trim:true, default: "" }, //Lo mismo de los 2 anteriores pero que el valor del par clave-valor sea de tipo String y por defecto la descripcion venga vacia "" 
    fechaCreacion: {type: Date, required: true, default: Date.now}, //La fecha de creacion sera de tipo Date, es un dato obligatorio y por default sera la fecha y hora actual
    fechaActualizacion: {type: Date, required: true, default: Date.now} //La fecha de actualizacion sera de tipo Date, es un dato obligatorio y por default sera la fecha y hora actual
  },
);

export const Genero = mongoose.model("Genero", genero); //Esta linea sirve para convertir el molde que creamos arriba en una herramienta la cual podamos usar, basicamente ("Crea un Model llamado Genero a partir del schema, y lo registra dentro de Mongoose")