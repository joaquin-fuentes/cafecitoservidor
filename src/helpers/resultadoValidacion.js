import { validationResult } from "express-validator"

const resultadoValidacion = (req, res, next) => {
    //trabajar con el resultado de la validacion de express-validator
    const errors = validationResult(req)
    // errors.isEmpty() // true: esta vacio, false: hay error
    if (!errors.isEmpty()) {
        return res.status(400).json({ errores: errors.array() })
    } 

    next()
}

export default resultadoValidacion