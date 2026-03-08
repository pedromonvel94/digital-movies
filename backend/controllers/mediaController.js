import { Media } from "../models/Media.js";
import { Genero } from "../models/Genero.js";
import { Director } from "../models/Director.js";
import { Productora } from "../models/Productora.js";
import { Tipo } from "../models/Tipo.js";

// GET, método para obtener todas las medias
const getMedia = async (req, res) => {
  try {
    const medias = await Media.find()
      .populate("generoPrincipal")
      .populate("directorPrincipal")
      .populate("productoraPrincipal")
      .populate("tipo");

    res.status(200).json(medias);
  } catch (error) {
    console.error("Error al obtener medias:", error);
    res.status(500).json({ msg: "Ocurrió un error al listar las medias" });
  }
};

// GET, método para obtener una media por su id
const getMediaById = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id)
      .populate("generoPrincipal")
      .populate("directorPrincipal")
      .populate("productoraPrincipal")
      .populate("tipo");

    if (!media) {
      return res.status(404).json({ message: "Media no encontrada" });
    }

    res.status(200).json(media);
  } catch (error) {
    console.error("Error al obtener la media por id:", error);
    res.status(500).json({ msg: "Ocurrió un error al obtener la media" });
  }
};

// POST, método para crear una nueva media
const createMedia = async (req, res) => {
  try {
    const {
      serial,
      titulo,
      sinopsis,
      url,
      imagen,
      anoEstreno,
      generoPrincipal,
      directorPrincipal,
      productoraPrincipal,
      tipo,
    } = req.body;

    if (!serial) {
      return res.status(400).json({ msg: "El serial es obligatorio" });
    }

    if (!titulo) {
      return res.status(400).json({ msg: "El título es obligatorio" });
    }

    if (!anoEstreno) {
      return res.status(400).json({ msg: "El año de estreno es obligatorio" });
    }

    if (!generoPrincipal || !directorPrincipal || !productoraPrincipal || !tipo) {
      return res.status(400).json({
        msg: "Género principal, director principal, productora principal y tipo son obligatorios",
      });
    }

    const serialDB = await Media.findOne({ serial });
    if (serialDB) {
      return res.status(400).json({ msg: `El serial "${serial}" ya existe.` });
    }

    if (url) {
      const urlDB = await Media.findOne({ url });
      if (urlDB) {
        return res.status(400).json({ msg: `La URL "${url}" ya existe.` });
      }
    }

    const generoDB = await Genero.findOne({
      _id: generoPrincipal,
      estado: "Activo",
    });

    if (!generoDB) {
      return res.status(400).json({
        msg: "El género principal no existe o no está activo",
      });
    }

    const directorDB = await Director.findOne({
      id: directorPrincipal,
      estado: "Activo",
    });

    if (!directorDB) {
      return res.status(400).json({
        msg: "El director principal no existe o no está activo",
      });
    }

    const productoraDB = await Productora.findOne({
      _id: productoraPrincipal,
      estado: "Activo",
    });

    if (!productoraDB) {
      return res.status(400).json({
        msg: "La productora principal no existe o no está activa",
      });
    }

    const tipoDB = await Tipo.findById(tipo);
    if (!tipoDB) {
      return res.status(400).json({ msg: "El tipo no existe" });
    }

    const media = new Media({
      serial,
      titulo,
      sinopsis,
      url,
      imagen,
      anoEstreno,
      generoPrincipal,
      directorPrincipal,
      productoraPrincipal,
      tipo,
    });

    await media.save();
    res.status(201).json(media);
  } catch (error) {
    console.error("Error al crear media:", error);
    res.status(500).json({ msg: "Ocurrió un error al guardar la media" });
  }
};

// PUT (UPDATE), método para actualizar una media por su id
const updateMedia = async (req, res) => {
  try {
    const {
      serial,
      url,
      generoPrincipal,
      directorPrincipal,
      productoraPrincipal,
      tipo,
    } = req.body;

    if (serial) {
      const serialDB = await Media.findOne({
        serial,
        _id: { $ne: req.params.id },
      });

      if (serialDB) {
        return res.status(400).json({ msg: `El serial "${serial}" ya existe.` });
      }
    }

    if (url) {
      const urlDB = await Media.findOne({
        url,
        id: { $ne: req.params.id },
      });

      if (urlDB) {
        return res.status(400).json({ msg: `La URL "${url}" ya existe.` });
      }
    }

    if (generoPrincipal) {
      const generoDB = await Genero.findOne({
        _id: generoPrincipal,
        estado: "Activo",
      });

      if (!generoDB) {
        return res.status(400).json({
          msg: "El género principal no existe o no está activo",
        });
      }
    }

    if (directorPrincipal) {
      const directorDB = await Director.findOne({
        _id: directorPrincipal,
        estado: "Activo",
      });

      if (!directorDB) {
        return res.status(400).json({
          msg: "El director principal no existe o no está activo",
        });
      }
    }

    if (productoraPrincipal) {
      const productoraDB = await Productora.findOne({
        _id: productoraPrincipal,
        estado: "Activo",
      });

      if (!productoraDB) {
        return res.status(400).json({
          msg: "La productora principal no existe o no está activa",
        });
      }
    }

    if (tipo) {
      const tipoDB = await Tipo.findById(tipo);
      if (!tipoDB) {
        return res.status(400).json({ msg: "El tipo no existe" });
      }
    }

    const actualizado = await Media.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          ...req.body,
          fechaActualizacion: new Date(),
        },
      },
      {
        new: true,
        runValidators: true,
      }
    )
      .populate("generoPrincipal")
      .populate("directorPrincipal")
      .populate("productoraPrincipal")
      .populate("tipo");

    if (!actualizado) {
      return res.status(404).json({ message: "Media no encontrada" });
    }

    res.status(200).json(actualizado);
  } catch (error) {
    console.error("Error al actualizar media:", error);
    res.status(500).json({ msg: "Ocurrió un error al actualizar la media" });
  }
};

// DELETE, método para eliminar una media por su id
const deleteMedia = async (req, res) => {
  try {
    const eliminado = await Media.findByIdAndDelete(req.params.id);

    if (!eliminado) {
      return res.status(404).json({ message: "Media no encontrada" });
    }

    res.status(200).json({ message: "Media eliminada" });
  } catch (error) {
    console.error("Error al eliminar media:", error);
    res.status(500).json({ msg: "Ocurrió un error al eliminar la media" });
  }
};

export { getMedia, getMediaById, createMedia, updateMedia, deleteMedia };