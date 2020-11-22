

export default class SuscripcionService  {
    constructor(repository,mapper){
        this.mapper = mapper
        this.repository = repository
    }

    async create(deportistaId,planId){
        const plan = await this.repository.Plan.findByPk(planId)
        if (plan.isAvailable()){
            const suscription = await this.repository.Suscripcion.create({deportistaId,planId})
            plan.cantidad = plan.cantidad - 1
            await plan.save()
            return {id:suscription.id}
        }else throw new Error('This Plan is not available')
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
                }
            ]
        })

       return suscripciones.map(x=>this.mapper.Suscripcion.mapperToDTO(x))
    }

  

}