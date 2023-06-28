import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, obtenerProducto, obtenerProductos } from "../controllers/productos.controllers";

const router = Router()


router.route("/productos")
    .get(obtenerProductos)
    .post(crearProducto)
router.route("/productos/:id")
    .get(obtenerProducto)
    .delete(borrarProducto)
    .put(editarProducto)

export default router