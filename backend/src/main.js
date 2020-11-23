import Sequalize from "./persistance/db"
import Model,{connect} from "./domain"
import {getServices} from "./services"
import {getRouters} from "./application"
import Mapper from "./shared/mappers"
import cors from "cors"
import { config } from "dotenv"
import express from "express"
config()
const db = new Sequalize(process.env.DB_URI)
db.getDBContext()
.then(async (context)=>{
connect(context)
await context.sync()
const services = getServices(Model,Mapper)

const routers = getRouters(services)
const app = express()

app.use(cors({ origin: "*", credentials: true }))
app.use(express.json())

 app.use(function(req,res,next){
    const key = req.headers.api_key || ""
    if (process.env.API_KEY === key ){
        next()
    } else{
        res.status(401).send("API KEY invalido")
    }
}) 



app.use("/static",express.static(__dirname+process.env.PhotosFolder))
 app.use("/authDeportista",routers.AuthDeportista)
app.use("/authGimnasio",routers.AuthGimnasio)
app.use("/gimnasios",routers.Gimnasio)
app.use("/planes",routers.Plan)
app.use("/suscripciones",routers.Suscripcion)
app.use("/entrenadores",routers.Entrenador) 
app.use("/maquinas",routers.Maquina)  
app.listen(process.env.PORT,()=>{
    console.log("Backend on "+process.env.PORT)
})
}).catch(console.log)



