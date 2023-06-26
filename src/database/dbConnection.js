import { connect } from "mongoose";
import { MONGODB_URI } from "../config";

// OPCION 1 PARA CONECTARME A BASE DE DATOS

// (async ()=>{
//     try {
//         const db = await connect(MONGODB_URI, {family:4})
//         console.log(`DB conectada en ${db.connection.name}`)
//     } catch (error) {
//         console.log(error)
//     }

// })()

// OPCION 2, ES LA QUE MUESTRA MONGOOSE EN SU DOCUMENTACION

connect(MONGODB_URI, {family:4})
.then((resp) => console.log(`DB conectada en ${resp.connection.name}`))
.catch((error)=> console.log(error))