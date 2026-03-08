/*
- Este archivo define las rutas HTTP para el recurso Género. O sea: “qué hacer cuando alguien llama /api/generos”
- genero.routes.js:
        genero → es el recurso (la entidad del mundo real: género).

        .routes → indica que adentro van rutas (endpoints).

        ¿Por qué está dentro de controllers/?
        Porque mucha gente mete las rutas ahí al inicio para no crear mil carpetas.
        Lo correcto “de libro” sería separar:

        routes/ (solo endpoints)

        controllers/ (solo lógica)

        Peeero en proyectos de clase, mezclarlo en controllers/ es común y funciona.
        Si quieres hacerlo más profesional luego, lo separamos.
*/

import { Genero } from "../models/Genero.js";

// GET, metodo para obtener todos los generos
const getGenero = async (req, res) => {
  try{
		const generos = await Genero.find();
		res.status(200).json(generos);
	}catch{
		console.log("Error al obtener generos", error);
		res.status(500).json({ msg: "Ocurrio un error al listar los generos" })
	}
};

// GET, metodo para obtener un genero por su id
const getGeneroById = async (req, res) => {
  const genero = await Genero.findById(req.params.id);
  if (!genero) return res.status(404).json({ message: "Género no encontrado" });
  res.json(genero);
};

// POST, metodo para crear un nuevo genero
const createGenero = async (req, res) => {
  try{
		const {nombre, estado, descripcion} = req.body;
		
		const generoDB = await Genero.findOne({ nombre });
		if(generoDB){
			return res.status(400).json({ msg: `El género "${nombre}" ya existe.` });
		}
		const genero = new Genero({ nombre, estado, descripcion });

    await genero.save();
    res.status(201).json(genero);
	}catch(error){
		console.error('❌ Error al crear género:', error);
    res.status(500).json({ msg: 'Ocurrió un error al guardar el género' })
	}
};

// PUT (UPDATE) metodo para actualizar un genero por su id
const updateGenero = async (req, res) => {
  const actualizado = await Genero.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!actualizado) return res.status(404).json({ message: "Género no encontrado" });
  res.json(actualizado);
};

// DELETE metodo para eliminar un genero por su id
const deleteGenero = async (req, res) => {
  const eliminado = await Genero.findByIdAndDelete(req.params.id);
  if (!eliminado) return res.status(404).json({ message: "Género no encontrado" });
  res.json({ message: "Género eliminado" });
};

export { getGenero, getGeneroById, createGenero, updateGenero, deleteGenero };