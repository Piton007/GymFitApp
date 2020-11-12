

export default class SuscripcionService  {
    constructor(repository,mapper){
        this.mapper = mapper
        this.repository = repository
    }

    create(deportistaId,planId){
        const plan = await this.repository.Plan.findByPk(planId)
        if (plan.isAvailable()){
            const suscription = await this.repository.Suscripcion.create({deportistaId,planId})
            plan.cantidad = plan.cantidad - 1
            return {id:suscription.id}
        }else throw new Error('This Plan is not available')
    }

    delete(suscriptionId){
        const suscription = await this.repository.Suscripcion.findByPk(suscriptionId)
        if (suscription){
            await suscription.destroy()
        }
        throw new Error("Suscription Not Found")
    }

    findAll(deportistaId){
        const suscripciones =  await this.repository.Suscripcion.findAll({
            where:{
                deportistaId
            },
            include:[
                {
                    as: 'Plan',
                    model:this.repository.Plan
                }
            ]
        })
       return suscripciones.map(x=>this.mapper.mapperToDTO(x))
    }

  

}