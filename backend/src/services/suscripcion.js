

export default class SuscripcionService  {
    constructor(repository,mapper){
        this.mapper = mapper
        this.repository = repository
    }

    async create(deportistaId,planId,maquinasId,entrenadorId){
        
        const plan = await this.repository.Plan.findByPk(planId)
        if (plan.isAvailable()){
            const suscription = await this.repository.Suscripcion.create({deportistaId,planId,entrenadorId})
            plan.cantidad = plan.cantidad - 1
            await  Promise.all(this.createMaquinas(suscription.id,maquinasId).concat([plan.save()]))
            return {id:suscription.id}
        }else throw new Error('This Plan is not available')
    }
    async update(suscriptionId,maquinasId,entrenadorId){
        const suscription = await this.repository.Suscripcion.findByPk(suscriptionId)
        if (suscription){
            suscription.entrenadorId = entrenadorId
            await Promise.all(this.updateMaquinas(suscriptionId,maquinasId).concat([suscription.save()]))
            return {id:suscriptionId}
        }else throw new Error("Suscription Not Found")

    }

    async delete(suscriptionId){
        
        const suscription = await this.repository.Suscripcion.findOne({
            where:{
                id:suscriptionId
            },
            include:[
                {
                    model:this.repository.Plan
                }
            ]
        })
        if (suscription){
            suscription.plan.cantidad += 1  
            return Promise.all([suscription.destroy(),suscription.plan.save()])
        }else{
            throw new Error("Suscription Not Found")
        }
       
    }

    async findAll(deportistaId){
        const suscripciones =  await this.repository.Suscripcion.findAll({
            where:{
                deportistaId
            },
            include:[
                {
                    model:this.repository.Plan,include:[this.repository.Gimnasio]
                },{
                    model:this.repository.SuscripcionMaquinas,
                    attributes:["maquinaId"]
                }
            ]
        })

       return suscripciones.map(x=>this.mapper.Suscripcion.mapperToDTO(x))
    }

   

    updateMaquinas(suscripcionId,maquinasId){
        const deleteMaquinas =  this.repository.SuscripcionMaquinas.destroy({
            where:{
                suscripcionId
            }
        })
        return [deleteMaquinas].concat(this.createMaquinas(suscripcionId,maquinasId))
    }

    createMaquinas(suscripcionId,maquinaIds){
        return maquinaIds.map((id)=>(this.repository.SuscripcionMaquinas.create({suscripcionId,maquinaId:id})))
    }
  

}