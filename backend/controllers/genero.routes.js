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

import { Router } from "express";
import { Genero } from "../models/Genero.js";

const router = Router();

// GET /api/generos?estado=ACTIVO
router.get("/", async (req, res) => {
  const filtro = {};
  if (req.query.estado) filtro.estado = req.query.estado;
  const generos = await Genero.find(filtro).sort({ createdAt: -1 });
  res.json(generos);
});

// GET /api/generos/:id
router.get("/:id", async (req, res) => {
  const genero = await Genero.findById(req.params.id);
  if (!genero) return res.status(404).json({ message: "Género no encontrado" });
  res.json(genero);
});

// POST /api/generos
router.post("/", async (req, res) => {
  const { nombre, estado, descripcion } = req.body;
  if (!nombre) return res.status(400).json({ message: "nombre es requerido" });

  const nuevo = await Genero.create({ nombre, estado, descripcion });
  res.status(201).json(nuevo);
});

// PUT /api/generos/:id
router.put("/:id", async (req, res) => {
  const actualizado = await Genero.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!actualizado) return res.status(404).json({ message: "Género no encontrado" });
  res.json(actualizado);
});

// DELETE /api/generos/:id
router.delete("/:id", async (req, res) => {
  const eliminado = await Genero.findByIdAndDelete(req.params.id);
  if (!eliminado) return res.status(404).json({ message: "Género no encontrado" });
  res.json({ message: "Género eliminado" });
});

export default router;