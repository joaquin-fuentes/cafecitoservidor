import {Schema, model} from "mongoose"

const productoSchema = new Schema({
    nombreProducto: {
        type: String,
        minLength: 2,
        maxLength: 50,
        unique: true,
        required: true
    },
    precio: {
        type: Number,
        min: 1,
        max: 10000,
        required:true
    },
    //para usar expresiones regulares se usa la propiedad "match"
    imagen: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required:true
    },
})

const Producto = model("producto", productoSchema)

export default Producto