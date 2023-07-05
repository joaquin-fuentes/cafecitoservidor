import { Router } from "express";
import {
    borrarProducto,
    crearProducto,
    editarProducto,
    obtenerProducto,
    obtenerProductos
} from "../controllers/productos.controllers";
import { check } from "express-validator"

const router = Router()


router.route("/productos")
    .get(obtenerProductos)
    .post([check("nombreProducto")
        .notEmpty()
        .withMessage("El nombre del producto es un dato obligatorio")
        .isLength({ min: 2, max: 100 })
        .withMessage("El nombre del producto debe tener entre 2 y 100 caracteres"),
    check("precio")
        .notEmpty()
        .withMessage("El precio es un dato obligatorio")
        .isNumeric()
        .withMessage("El precio debe estar en formato numerico")
        .custom((valorPrecio) => {
            if (valorPrecio >= 1 && valorPrecio <= 10000) {
                return true
            } else {
                throw new Error("El precio debe estar entre 1 y 10000")
            }
        })

    ], crearProducto)
router.route("/productos/:id")
    .get(obtenerProducto)
    .delete(borrarProducto)
    .put(editarProducto)

export default router