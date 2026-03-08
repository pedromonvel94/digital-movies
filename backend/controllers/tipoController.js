import { Tipo } from "../models/Tipo.js";

// GET, metodo para obtener todos los tipos
const getTipo = async (req, res) => {
  try {
    const tipos = await Tipo.find();
    res.status(200).json(tipos);
  } catch (error) {
    console.log("Error al obtener tipos", error);
    res.status(500).json({ msg: "Ocurrio un error al listar los tipos" });
  }
};

// GET, metodo para obtener un tipo por su id
const getTipoById = async (req, res) => {
  const tipo = await Tipo.findById(req.params.id);
  if (!tipo) return res.status(404).json({ message: "Tipo no encontrado" });
  res.json(tipo);
};

// POST, metodo para crear un nuevo tipo
const createTipo = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;

    if (!nombre) {
      return res.status(400).json({ msg: "El nombre del tipo es obligatorio" });
    }

    const tipoDB = await Tipo.findOne({ nombre });
    if (tipoDB) {
      return res.status(400).json({ msg: `El tipo "${nombre}" ya existe.` });
    }

    const tipo = new Tipo({ nombre, descripcion });

    await tipo.save();
    res.status(201).json(tipo);
  } catch (error) {
    console.error("Error al crear tipo:", error);
    res.status(500).json({ msg: "Ocurrio un error al guardar el tipo" });
  }
};

// PUT (UPDATE) metodo para actualizar un tipo por su id
const updateTipo = async (req, res) => {
  const actualizado = await Tipo.findByIdAndUpdate(
    req.params.id,
    { $set: { ...req.body, fechaActualizacion: Date.now() } },
    { new: true, runValidators: true }
  );
  if (!actualizado) return res.status(404).json({ message: "Tipo no encontrado" });
  res.json(actualizado);
};

// DELETE metodo para eliminar un tipo por su id
const deleteTipo = async (req, res) => {
  const eliminado = await Tipo.findByIdAndDelete(req.params.id);
  if (!eliminado) return res.status(404).json({ message: "Tipo no encontrado" });
  res.json({ message: "Tipo eliminado" });
};

export { getTipo, getTipoById, createTipo, updateTipo, deleteTipo };
