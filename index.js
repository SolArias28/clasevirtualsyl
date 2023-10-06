import Express from "express"
import sumar from "./funciones.js"
import cors from "cors";
import {router}from "./routes/routes.js"

const app = express()
app.use(cors())
app.use(express.json())

app.use('/usuarios',router);


app.listen(8000, ()=> {
    console.log('servidor corriendo en http://localhost:8000/')
})


var nombre = "George"
console.log(nombre)
console.log(sumar.sumar(10,20))
