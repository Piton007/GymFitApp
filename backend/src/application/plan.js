import { Router as router} from "express"
import {body,validationResult} from "express-validator"
import {query} from "express-validator/check"

export default class Router {
    constructor(service){
        this.service = service
        this.router = router()
        this.getAll()
        this.create()
        this.delete()
    }
    getAll(){
        this.router.get("/",[query('gimnasio','Introduzca un id valido').isInt()],function(req,res){
            const errors  = validationResult(req)
            if(!errors.isEmpty()) res.status(400).send({errors:errors.array()})
            res.status(200).send(await this.service.findAll(req.query.gimnasio))
        })
    }
    create(){
        this.router.post("/",[
            body('gimnasio_id',"Ingresa un gimnasio valido").notEmpty().isInt().toInt(),
            body('periodo',"Ingresa un periodo valido").notEmpty().isInt().toInt(),
            body('precio',"Ingresa un precio valido").notEmpty().isFloat().toFloat(),
            body('cantidad',"Ingresa una cantidad valida").notEmpty().isInt({min:1}).toInt(),
            body('nombre',"Ingresa un nombre valido").notEmpty().isString().isLength({max:20}),
            body('descripcion',"Ingresa una descipcion valida").notEmpty().isString().isLength({max:120})
        ],function(req,res){
            try {
                const errors = validationResult(req)
                if (!errors.isEmpty()){
                     res.status(400).send({errors:errors.array()})
                }

                const id  = await this.service.create(reqDTOBuilder(req))
                 res.status(202).send({data:{id},message:'El plan se ha creado con exito',errors:[] })
            } catch (e) {
                res.status(400).send({errors:e.message})
            }
        })
    }
    delete(){
        this.router.delete("/:id",function(req,res){
            if (req.params.id){
                await this.service.delete(req.params.id)
                res.status(200).send({data:{id},message:'Se ha eliminado el plan con exito',errors:[] })
            } else res.status(400).send({errors:'El campo id es obligatorio'})
        })
    }
    reqDTOBuilder(req){
        return {
            gimnasioId:req.body.gimnasio_id,
            periodo:req.body.periodo,
            precio:req.body.precio,
            cantidad:req.body.cantidad,
            nombre:req.body.nombre,
            descripcion:req.body.descripcion
        }
    }
   
}