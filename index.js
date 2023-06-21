import express from "express"

//configurar un puerto
//crear una instancia de express
const app = express()

app.set("port", process.env.PORT || 4000)
const puerto = app.get("port")

app.listen(puerto, ()=>{
    console.log("Estoy en el puerto "+ puerto)
})