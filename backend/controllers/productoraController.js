import { Productora } from "../models/Productora.js";

// GET, metodo para obtener todas las productoras
const getProductora = async (req, res) => {
  try {
    const productoras = await Productora.find();
    res.status(200).json(productoras);
  } catch (error) {
    console.log("Error al obtener productoras", error);
    res.status(500).json({ msg: "Ocurrio un error al listar las productoras" });
  }
};

// GET, metodo para obtener una productora por su id
const getProductoraById = async (req, res) => {
  const productora = await Productora.findById(req.params.id);
  if (!productora) return res.status(404).json({ message: "Productora no encontrada" });
  res.json(productora);
};

// POST, metodo para crear una nueva productora
const createProductora = async (req, res) => {
  try {
    const { nombre, estado, slogan, descripcion } = req.body;

    if (!nombre) {
      return res.status(400).json({ msg: "El nombre de la productora es obligatorio" });
    }

    if (estado && estado !== "Activo" && estado !== "Inactivo") {
      return res.status(400).json({ msg: "El estado de la productora debe ser 'Activo' o 'Inactivo'" });
    }

    const productoraDB = await Productora.findOne({ nombre });
    if (productoraDB) {
      return res.status(400).json({ msg: `La productora "${nombre}" ya existe.` });
    }

    const productora = new Productora({ nombre, estado, slogan, descripcion });

    await productora.save();
    res.status(201).json(productora);
  } catch (error) {
    console.error("Error al crear productora:", error);
    res.status(500).json({ msg: "Ocurrio un error al guardar la productora" });
  }
};

// PUT (UPDATE) metodo para actualizar una productora por su id
const updateProductora = async (req, res) => {
  const actualizado = await Productora.findByIdAndUpdate(
    req.params.id,
    { $set: { ...req.body, fechaActualizacion: Date.now() } },
    { new: true, runValidators: true }
  );
  if (!actualizado) return res.status(404).json({ message: "Productora no encontrada" });
  res.json(actualizado);
};

// DELETE metodo para eliminar una productora por su id
const deleteProductora = async (req, res) => {
  const eliminado = await Productora.findByIdAndDelete(req.params.id);
  if (!eliminado) return res.status(404).json({ message: "Productora no encontrada" });
  res.json({ message: "Productora eliminada" });
};

export { getProductora, getProductoraById, createProductora, updateProductora, deleteProductora };
