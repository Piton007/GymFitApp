import Sequalize from "./persistance/db"
import {Migrations} from "./domain/index"
import { config } from "dotenv"
config()
const db = new Sequalize(process.env.DB_URI)
const context = await db.getDBContext()
Migrations(context)
