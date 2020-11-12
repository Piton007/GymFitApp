import { Router as router} from "express"
import {body,validationResult,query} from "express-validator"


export default class Router {
    constructor(service){
        this.service = service
        this.router = router()
        this.getAll()
        this.create()
        this.delete()
    }
    async getAll(){
        this.router.get("/",[query('deportista','Introduzca un id valido').isInt()],async function(req,res){
            const errors  = validationResult(req)
            if(!errors.isEmpty()) res.status(400).send({errors:errors.array()})
            res.status(200).send(await this.service.findAll(req.query.deportista))
        })
    }
    async create(){
        this.router.post("/",[
            body('plan_id').notEmpty().toInt(),
            body('deportista_id').notEmpty().toInt()
        ],async function(req,res){
            try {
                const errors = validationResult(req)
                if (!errors.isEmpty()){
                     res.status(400).send({errors:errors.array()})
                }
            
                const id  = await this.service.create(req.body.deportista_id,req.body.plan_id)
                 res.status(202).send({data:{id},message:'La suscripcion se ha creado con exito',errors:[] })
            } catch (e) {
                res.status(400).send({errors:e.message})
            }
        })
    }
    async delete(){
        this.router.delete("/:id",async function(req,res){
            if (req.params.id){
                await this.service.delete(req.params.id)
                res.status(200).send({data:{id},message:'Se ha desuscrito con exito',errors:[] })
            } else res.status(400).send({errors:'El campo id es obligatorio'})
        })
    }
   
}