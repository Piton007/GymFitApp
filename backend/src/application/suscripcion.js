import { Router as router} from "express"
import {body,validationResult,query} from "express-validator"


export default class Router {
    constructor(service){
        this.service = service
        this.router = router()
        this.getAll()
        this.create()
        this.delete()
        this.update()
    }
    async getAll(){
        this.router.get("/",[query('deportista','Introduzca un id valido').isInt()],async (req,res)=>{
            const errors  = validationResult(req)
            if(!errors.isEmpty()) res.status(400).send({errors:errors.array()})
            res.status(200).send({data:await this.service.findAll(req.query.deportista),message:'Suscripciones',errors:[]} )
        })
    }
    async create(){
        this.router.post("/",[
            body('plan_id').notEmpty().toInt(),
            body('deportista_id').notEmpty().toInt(),
            body('entrenador_id').notEmpty().toInt(),
            body('maquinas').notEmpty().isArray()
        ],async (req,res)=>{
            try {
                const errors = validationResult(req)
                if (!errors.isEmpty()){
                     res.status(400).send({errors:errors.array()})
                }
            
                const id  = await this.service.create(req.body.deportista_id,req.body.plan_id,req.body.maquinas,req.body.entrenador_id)
                 res.status(202).send({data:{id},message:'La suscripcion se ha creado con exito',errors:[] })
            } catch (e) {
                res.status(400).send({errors:e.message})
            }
        })
    }


    async update(){
        this.router.put("/:id",[
            body('entrenador_id').notEmpty().toInt(),
            body('maquinas').notEmpty().isArray()
        ],async (req,res)=>{
            try {
                const errors = validationResult(req)
                if (!errors.isEmpty()){
                     res.status(400).send({errors:errors.array()})
                }
                if (req.params.id){
                    const id  = await this.service.update(req.params.id,req.body.maquinas,req.body.entrenador_id)
                    res.status(202).send({data:{id},message:'La suscripcion se ha actualizado con exito',errors:[] })
                }else{
                    throw new Error("ID is required")
                }

            } catch (e) {
                res.status(400).send({errors:e.message})
            }
        })
    }
    async delete(){
        this.router.delete("/:id",async (req,res)=>{
            if (req.params.id){
                await this.service.delete(req.params.id)
                res.status(200).send({data:{id:req.params.id},message:'Se ha desuscrito con exito',errors:[] })
            } else res.status(400).send({errors:'El campo id es obligatorio'})
        })
    }
   
}