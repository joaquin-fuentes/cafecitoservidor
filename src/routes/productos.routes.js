import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, obtenerProductos } from "../controllers/productos.controllers";

const router = Router()

// app.get("/prueba", (req, res)=>{
//     res.send("esto es una prueba de la peticion GET a mi backend")
// })

router.route("/productos")
.get(obtenerProductos)
.post(crearProducto)
router.route("/productos/:id")
.delete(borrarProducto)
.put(editarProducto)

export default router