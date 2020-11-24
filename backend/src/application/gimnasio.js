import { Router as router} from "express"

export default class Router {
    constructor(service){
        this.service = service
        this.router = router()
        this.getAll()
        this.getByIdPopulatePlanes()
    }
    async getAll(){
        this.router.get("/",async (req,res)=>{
            
            res.status(200).send({data:await this.service.getAll(),message:'Se ha eliminado el plan con exito',errors:[] })
        })
    }

    async getByIdPopulatePlanes(){
        this.router.get("/:id/planes",async (req,res)=>{
            const {id} = req.params
            res.status(200).send({data:await this.service.getByIdAndPopulatePlans(id),message:'Gimnasio con planes',errors:[] })
        })
    }
    
   
}