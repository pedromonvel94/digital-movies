import mongoose from "mongoose";

const media = new mongoose.Schema({
    serial:{type: String, unique: true, required: [true, "El serial es obligatorio"], trim: true}, //Le indico a mongoose que quiero que el documento tenga el par clave-valor: serial:valor y que ese valor cumpla con los requisitos que le coloque, osea que sea String, que sea required, que se le haga trim para eliminar espacios, y unique.
    titulo: {type: String, required: [true, "El título es obligatorio"], trim: true}, //Le indico a mongoose que quiero que el documento tenga el par clave-valor: titulo:valor y que ese valor cumpla con los requisitos que le coloque, osea que sea String, que sea required, que se le haga trim para eliminar espacios
    sinopsis: {type: String, trim:true, default: ""}, //La sinopsis de la produccion sera de tipo String, se le hara trim para eliminar espacios y por defecto vendra vacio ""
    url: {type: String, trim:true, unique: true}, //La url de la produccion sera de tipo String, se le hara trim para eliminar espacios y por defecto vendra vacio ""
    imagen: {type: String, trim:true, default: ""}, //La imagen de la produccion sera de tipo String, se le hara trim para eliminar espacios y por defecto vendra vacio ""
    fechaCreacion: {type: Date, required: true, default: Date.now}, //La fecha de creacion sera de tipo Date, es un dato obligatorio y por default sera la fecha y hora actual
    fechaActualizacion: {type: Date, required: true, default: Date.now}, //La fecha de actualizacion sera de tipo Date, es un dato obligatorio y por default sera la fecha y hora actual
    anoEstreno: {type: Number, required: [true, "El año de estreno es obligatorio"]}, //El año de estreno de la produccion sera de tipo Number, es un dato obligatorio
    generoPrincipal: {type: mongoose.Schema.Types.ObjectId, ref: "Genero", required: [true, "El género principal es obligatorio"]}, //El genero principal de la produccion sera de tipo ObjectId, se le hara referencia al modelo Genero y es un dato obligatorio
    directorPrincipal: {type: mongoose.Schema.Types.ObjectId, ref: "Director", required: [true, "El director principal es obligatorio"]}, //El director principal de la produccion sera de tipo ObjectId, se le hara referencia al modelo Director y es un dato obligatorio
    productoraPrincipal: {type: mongoose.Schema.Types.ObjectId, ref: "Productora", required: [true, "La productora principal es obligatoria"]}, //La productora principal de la produccion sera de tipo ObjectId, se le hara referencia al modelo Productora y es un dato obligatorio
    tipo: {type: mongoose.Schema.Types.ObjectId, ref: "Tipo", required: [true, "El tipo es obligatorio"]} //El tipo de la produccion sera de tipo ObjectId, se le hara referencia al modelo Tipo y es un dato obligatorio
})

export const Media = mongoose.model("Media", media); //Esta linea sirve para convertir el molde que creamos arriba en una herramienta la cual podamos usar, basicamente ("Crea un Model llamado Media a partir del schema, y lo registra dentro de Mongoose")