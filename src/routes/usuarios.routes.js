import { Router } from "express";
import { crearUsuario, obtenerUsuarios } from "../controllers/usuarios.controller";

const router = Router()

// app.get("/prueba", (req, res)=>{
//     res.send("esto es una prueba de la peticion GET a mi backend")
// })

router.route("/usuarios")
.get(obtenerUsuarios)
.post(crearUsuario)

export default router