import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";


const validarProducto = [
    check("nombreProducto")
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
        }),
    check("imagen")
        .notEmpty()
        .withMessage("La imagen es un dato obligatorio")
        .matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|svg)$/)
        .withMessage("La imagen debe ser de formato jpg, png o svg"),
    check("categoria")
        .notEmpty()
        .withMessage("La categoria es un dato obligatorio")
        .isIn(["Bebidas calientes", "Bebidas frias", "Resposteria", "Sandwiches y bocadillos", "Desayunos", "Complementos y snacks"])
        .withMessage("Debe seleccionar una categoria valida"),

        // al final de las validaciones invoco a resultadoValidacion
        (req,res,next) => {resultadoValidacion(req,res,next)}
]

export default validarProducto