import mongoose from "mongoose";

const productora = new mongoose.Schema(
    {
        nombre: { type: String, required: [true, "El nombre es obligatorio"], trim: true, unique: true }, //Le indico a mongoose que quiero que el documento tenga el par clave-valor: nombre:valor y que ese valor cumpla con los requisitos que le coloque, osea que sea String, que sea required, que se le haga trim para eliminar espacios, y unique.
        estado: { type: String, enum: ["Activo", "Inactivo"], default: "Activo" }, //Le indico a mongoose que quiero que el documento tenga el par clave-valor: estado:valor y que ese valor cumpla con los requisitos que le coloque, osea que sea de tipo String, que solo pueda tener los valores "ACTIVO", "INACTIVO" (Que son los que se setean en el enum) y que por default sea ACTIVO
        fechaCreacion: {type: Date, required: true, default: Date.now}, //La fecha de creacion sera de tipo Date, es un dato obligatorio y por default sera la fecha y hora actual
        fechaActualizacion: {type: Date, required: true, default: Date.now}, //La fecha de actualizacion sera de tipo Date, es un dato obligatorio y por default sera la fecha y hora actual
        slogan: {type: String, trim:true, default: ""}, //El slogan de la productora sera de tipo String, se le hara trim para eliminar espacios y por defecto vendra vacio ""
        descripcion: {type: String, trim:true, default: ""} //La descripcion de la productora sera de tipo String, se le hara trim para eliminar espacios y por defecto vendra vacio ""
    }
)

export const Productora = mongoose.model("Productora", productora); //Esta linea sirve para convertir el molde que creamos arriba en una herramienta la cual podamos usar, basicamente ("Crea un Model llamado Productora a partir del schema, y lo registra dentro de Mongoose")