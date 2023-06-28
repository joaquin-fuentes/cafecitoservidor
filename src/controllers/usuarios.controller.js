import Usuario from "../models/usuario"

//Controlador para obtener usuarios

export const obtenerUsuarios = async (req, res)=>{
    try {
        const usuarios = await Usuario.find()
        res.status(200).json(usuarios)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar los usuarios de la base de datos"
        })
    }
}

// Controlador para crear un producto

export const crearUsuario = async (req, res)=>{
    try {
        const usuarioNuevo = new Usuario(req.body)
        await usuarioNuevo.save()
        res.status(201).json({
            mensaje: "El usuario fue creado correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al crear el usuario"
        })
    }
}