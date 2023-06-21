import express from "express"
import cors from "cors"
import morgan from "morgan"
import * as dotenv from "dotenv"


//crear una instancia de express
const app = express()

//este si o si va antes del puerto
dotenv.config()//sirve para leer variables de entorno

//configurar un puerto
app.set("port", process.env.PORT || 4000)
const puerto = app.get("port")

app.listen(puerto, ()=>{
    console.log("Estoy en el puerto "+ puerto)
})

//middlewares: funciones que ejecutan alguna tarea, generalmente antes de llegar a las rutas
app.use(cors()) //permite conexiones remotas
app.use(express.json())  //permite interpretar el formato JSON de una solicitud
app.use(express.urlencoded({extended:true}))  //permite recibir en el objeto request los string y arrays
app.use(morgan("dev")) //nos da informacion extra en la terminal

//rutas(siempre van al final)
// http://localhost:3004/productos

app.get("/prueba", (req, res)=>{
    res.send("esto es una prueba de la peticion GET a mi backend")
})