import Usuario from "../models/usuario"


export const login = async (req, res) => {
    try {
      //verificar si existe un mail como el recibido
      const { email, password } = req.body;
  
      //verificar si el email ya existe
      let usuario = await Usuario.findOne({ email }); //devulve un null
      if (!usuario) {
        //si el usuario existe
        return res.status(400).json({
          mensaje: "Correo o password invalido - correo",
        });
      }
      // si no es valido el password
      if (password !== usuario.password) {
        return res.status(400).json({
          mensaje: "Correo o password invalido - password",
        });
      }
  
      //responder que el usuario es correcto
      res.status(200).json({
        mensaje: "El usuario existe",
        uid: usuario._id,
        nombre: usuario.nombreUsuario,
      })
    } catch (error) {
      console.log(error);
      res.status(400).json({
        mensaje: "usuario o contraseña invalido",
      });
    }
  };

  
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