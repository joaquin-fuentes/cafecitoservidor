import { Router } from "express";
import { crearUsuario, obtenerUsuarios } from "../controllers/usuarios.controller";

const router = Router()


router.route("/usuarios")
.get(obtenerUsuarios)
.post(crearUsuario)

export default router