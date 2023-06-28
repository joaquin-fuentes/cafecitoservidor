import Producto from "../models/producto"

//Controlador para obtener productos

export const obtenerProductos = async (req, res)=>{
    try {
        const productos = await Producto.find()
        res.status(200).json(productos)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar los productos de la base de datos"
        })
    }
}
//Controlador para obtener un solo producto

export const obtenerProducto = async (req, res)=>{
    try {
        const {id} = req.params
        const producto = await Producto.findById(id)
        res.status(200).json(producto)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar el producto de la base de datos"
        })
    }
}

// Controlador para crear un producto

export const crearProducto = async (req, res)=>{
    try {
        const productoNuevo = new Producto(req.body)
        await productoNuevo.save()
        res.status(201).json({
            mensaje: "El producto fue creado correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al crear el producto"
        })
    }
}

// controlador para eliminar un producto

export const borrarProducto = async (req, res)=>{
    try {
        //obtener el id y luego solicitar a moongoose el borrar   
        const {id} = req.params   
        await Producto.findByIdAndDelete(id)
        res.status(200).json({
            mensaje: "El producto fue eliminado"
        })
    } 
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al eliminar el producto"
        })
    }
}

// controlador para editar un producto

export const editarProducto = async (req, res)=>{
    try {
        //obtener el id y luego solicitar a moongoose el editar   
        const {id} = req.params   
        await Producto.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            mensaje: "El producto fue actualizado correctamente"
        })
    } 
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al editar el producto"
        })
    }
}