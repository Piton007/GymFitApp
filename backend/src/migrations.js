import Sequalize from "./persistance/db"
import Model,{Migrations,connect} from "./domain/index"
import { config } from "dotenv"

config()
function getArgs () {
   const args = {};
   process.argv
       .slice(2, process.argv.length)
       .forEach( arg => {
       // long arg
       if (arg.slice(0,2) === '--') {
           const longArg = arg.split('=');
           const longArgFlag = longArg[0].slice(2,longArg[0].length);
           const longArgValue = longArg.length > 1 ? longArg[1] : true;
           args[longArgFlag] = longArgValue;
       }
       // flags
       else if (arg[0] === '-') {
           const flags = arg.slice(1,arg.length).split('');
           flags.forEach(flag => {
           args[flag] = true;
           });
       }
   });
   return args;
}
const SEEDING = "data-seeding"
const db = new Sequalize(process.env.DB_URI)

const args = getArgs()

db.getDBContext()
.then(async (context)=>{
   
 
   Migrations(context).then(()=>{
      
      if(args[SEEDING]){
         connect(context)
         dataSeeding(context)
         
       }else{
         console.log("DB created")
          context.close()
       }
      
      
      
   })
 


}).catch((error)=>{
   console.log(error)
})



function dataSeeding(context){
  Promise.all(createGimnasios().concat(createDeportistas()).concat(createMaquinas()).concat(createEntrenadores()).concat(createPlans())).then(()=>{
     console.log("Data seeded !")
     context.close()
  })

}

function createGimnasios(){
   return [ Model.Gimnasio.create({email:'gimnasio1@gmail.com',name:'Gimnasio 1',latitud:'12.233',longitud:'14.2332',direccion:'Chorrillos - Sanata leonor'}),
   Model.Gimnasio.create({email:'gimnasio2@gmail.com',name:'Gimnasio 2',latitud:'16.233',longitud:'14.2332',direccion:'Chorrillos - Sanata leonor'}),
   Model.Gimnasio.create({email:'gimnasio3@gmail.com',name:'Gimnasio 3',latitud:'10.233',longitud:'14.2332',direccion:'Chorrillos - Sanata leonor'})]
}
function createDeportistas(){
   return [ Model.Deportista.create({name:'Jose Luis',email:'josemowa@gmail.com'}),Model.Deportista.create({name:'Luis Jose',email:'josemowa2@gmail.com'})]
}
function createMaquinas(){
   return [Model.Maquina.create({name:'Pesas',image:'pesas.jpg',gimnasioId:1}),Model.Maquina.create({name:'Curl Machine',image:'curl_machine.jpg',gimnasioId:1})]
}
function createEntrenadores(){
   return [Model.Entrenador.create({name:'Zidane',image:'entrenador1.jpg',gimnasioId:1})]
}

function createPlans(){
   return [Model.Plan.create({gimnasioId:1,name:"VIP",descripcion:"descipricon1",periodo:6,precio:220,cantidad:4})]
}





