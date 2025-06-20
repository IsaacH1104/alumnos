import {Schema, model} from "mongoose"
const EsquemaAlumnos = new Schema ({
    name: String,
    calif:Number
})

export const modeloAlumnos = new model("Palabras", EsquemaAlumnos)