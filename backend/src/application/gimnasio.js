import { Router as router} from "express"

export default class Router {
    constructor(service){
        this.service = service
        this.router = router()
        this.getAll()
    }
    getAll(){
        this.router.get("/",function(req,res){
            res.status(200).send(await this.service.getAll())
        })
    }
    
   
}