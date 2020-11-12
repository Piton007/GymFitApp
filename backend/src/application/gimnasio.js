import { Router as router} from "express"

export default class Router {
    constructor(service){
        this.service = service
        this.router = router()
        this.getAll()
    }
    async getAll(){
        this.router.get("/",async (req,res)=>{
            res.status(200).send(await this.service.getAll())
        })
    }
    
   
}