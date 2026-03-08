
import { Director } from "../models/Director.js";

// GET, metodo para obtener todos los directores
const getDirector = async (req, res) => {
  try{
        const director = await Director.find();
        res.status(200).json(director);
    }catch(error){
        console.log("Error al obtener directores", error);
        res.status(500).json({ msg: "Ocurrio un error al listar los directores" })
    }
};

// GET, metodo para obtener un director por su id
const getDirectorById = async (req, res) => {
  const director = await Director.findById(req.params.id);
  if (!director) return res.status(404).json({ message: "Director no encontrado" });
  res.json(director);
};

// POST, metodo para crear un nuevo genero
const createDirector = async (req, res) => {
  try{
        const {nombre, estado} = req.body;
        const director = new Director({ nombre, estado });

        if(!nombre){
            return res.status(400).json({ msg: "El nombre del director es obligatorio" });
        } else if (estado !== "Activo" && estado !== "Inactivo"){
            return res.status(400).json({ msg: "El estado del director debe ser 'Activo' o 'Inactivo'" });
        }

        await director.save();
        res.status(201).json(director);
    }catch(error){
        console.error('❌ Error al crear director:', error);
        res.status(500).json({ msg: 'Ocurrió un error al guardar el director' })
    }
};

// PUT (UPDATE) metodo para actualizar un genero por su id
const updateDirector = async (req, res) => {
  const actualizado = await Director.findByIdAndUpdate(req.params.id, req.body, 
    {$set: {...req.body, fechaActualizacion: Date.now()}}, //Investigamos que estabamos teniendo un problema, y es que al actualizar no se estaba actualizando la fecha a la nueva fecha de actualizacion, entonces lo que hicimos fue agregar un nuevo objeto dentro de las opciones del findByIdAndUpdate, el cual se llama $set, este objeto se encarga de actualizar los campos que le indiquemos, en este caso le indicamos que actualice todos los campos que le lleguen en el cuerpo de la peticion (req.body) y ademas le indicamos que actualice el campo fechaActualizacion con la fecha y hora actual (Date.now())
    {new: true, runValidators: true,});
  if (!actualizado) return res.status(404).json({ message: "Director no encontrado" });
  res.json(actualizado);
};

// DELETE metodo para eliminar un genero por su id
const deleteDirector = async (req, res) => {
  const eliminado = await Director.findByIdAndDelete(req.params.id);
  if (!eliminado) return res.status(404).json({ message: "Director no encontrado" });
  res.json({ message: "Director eliminado" });
};

export { getDirector, getDirectorById, createDirector, updateDirector, deleteDirector };