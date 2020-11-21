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
        this.router.get("/",async (req,res)=>{
            
            res.status(200).send({data:await this.service.findAll(),message:'Se ha eliminado el plan con exito',errors:[] })
        })
    }
    async create(){
        this.router.post("/",[
            body('gimnasio_id',"Ingresa un gimnasio valido").notEmpty().isInt().toInt(),
            body('periodo',"Ingresa un periodo valido").notEmpty().isInt().toInt(),
            body('precio',"Ingresa un precio valido").notEmpty().isFloat().toFloat(),
            body('cantidad',"Ingresa una cantidad valida").notEmpty().isInt({min:1}).toInt(),
            body('nombre',"Ingresa un nombre valido").notEmpty().isString().isLength({max:20}),
            body('descripcion',"Ingresa una descipcion valida").notEmpty().isString().isLength({max:120})
        ],async (req,res)=>{
            try {
                const errors = validationResult(req)
                if (!errors.isEmpty()){
                     res.status(400).send({message:'Error al crear',errors:errors.array()})
                }
                const id  = await this.service.create(this.reqDTOBuilder(req))
                 res.status(202).send({data:id,message:'El plan se ha creado con exito',errors:[] })
            } catch (e) {
                res.status(400).send({errors:e.message})
            }
        })
    }
    async delete(){
        this.router.delete("/:id",async (req,res)=>{
            if (req.params.id){
                await this.service.delete(req.params.id)
                res.status(200).send({data:req.params.id,message:'Se ha eliminado el plan con exito',errors:[] })
            } else res.status(400).send({errors:'El campo id es obligatorio'})
        })
    }
    reqDTOBuilder(req){
        return {
            gimnasioId:req.body.gimnasio_id,
            periodo:req.body.periodo,
            precio:req.body.precio,
            cantidad:req.body.cantidad,
            name:req.body.nombre,
            descripcion:req.body.descripcion
        }
    }
   
}