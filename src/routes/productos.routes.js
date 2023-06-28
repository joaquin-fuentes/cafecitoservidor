import { Router } from "express";
import {
    borrarProducto,
    crearProducto,
    editarProducto,
    obtenerProducto,
    obtenerProductos
} from "../controllers/productos.controllers";
import {check} from "express-validator"

const router = Router()


router.route("/productos")
    .get(obtenerProductos)
    .post([check("nombreProducto")
           .notEmpty()
           .withMessage("El nombre del producto es un dato obligatorio")]
                ,crearProducto)
router.route("/productos/:id")
    .get(obtenerProducto)
    .delete(borrarProducto)
    .put(editarProducto)

export default router