import { modeloAlumnos } from "../models/alumnos.models.js";

modeloAlumnos.create({
    name:"Juan",
    calif:9.5
},
{
    name:"Itzel",
    calif:5.5
},
{
    name:"Esmeralda",
    calif:8.9
},
{
    name:"Jesus",
    calif:10
},
{
    name:"Pancho",
    calif:0.1
}
)

export const test = () =>{
    console.log("Llamando al controlador")
}