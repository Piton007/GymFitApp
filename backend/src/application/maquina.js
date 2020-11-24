import { Router as router} from "express"
import {validationResult,query} from "express-validator"


export default class Router {
    constructor(service){
        this.service = service
        this.router = router()
        this.getAll()
    }
    async getAll(){
        this.router.get("/",[query('gimnasio','Introduzca un id valido').isInt()],async (req,res)=>{
            const errors  = validationResult(req)
            if(!errors.isEmpty()) res.status(400).send({errors:errors.array()})
            res.status(200).send({data:await this.service.getAllByGimnasioId(req.query.gimnasio),message:'Maquinas',errors:[]} )
        })
    }

   
}