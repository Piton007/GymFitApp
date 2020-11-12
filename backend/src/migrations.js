import Sequalize from "./persistance/db"
import {Migrations} from "./domain/index"
import { config } from "dotenv"

config()
const db = new Sequalize(process.env.DB_URI)
db.getDBContext()
.then(async (context)=>{
 Migrations(context).then(()=>{
    console.log("DB created")
 })

}).catch(console.log)



