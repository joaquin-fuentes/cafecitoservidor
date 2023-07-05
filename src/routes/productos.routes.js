import { Router } from "express";
import {
    borrarProducto,
    crearProducto,
    editarProducto,
    obtenerProducto,
    obtenerProductos
} from "../controllers/productos.controllers";
import validarProducto from "../helpers/validarProducto";

const router = Router()


router.route("/productos")
    .get(obtenerProductos)
    .post(validarProducto , crearProducto)
router.route("/productos/:id")
    .get(obtenerProducto)
    .delete(borrarProducto)
    .put(validarProducto, editarProducto)

export default router