import { Router as router} from "express"
import {validationResult,query} from "express-validator"


export default class Router {
    constructor(service){
        this.service = service
        this.router = router()
        this.getAll()
        this.delete()
    }
    async getAll(){
        this.router.get("/",[query('gimnasio','Introduzca un id valido').isInt()],async (req,res)=>{
            const errors  = validationResult(req)
            if(!errors.isEmpty()) res.status(400).send({errors:errors.array()})
            res.status(200).send({data:await this.service.getAllByGimnasioId(req.query.gimnasio),message:'Entrenadores',errors:[]} )
        })
    }
    async delete() {
		this.router.delete("/:id", async (req, res) => {
			if (req.params.id) {
				await this.service.deleteById(req.params.id);
				res.status(200).send({
					data: req.params.id,
					message: "Se ha eliminado el entrenador con exito",
					errors: [],
				});
			} else res.status(400).send({ errors: "El campo id es obligatorio" });
		});
	}

   
}