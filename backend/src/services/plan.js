

export default class PlanService  {
    constructor(repository,mapper){
        this.mapper = mapper
        this.repository = repository
    }

    async create(dto){
        const plan = await this.repository.Plan.create(dto)
        return {id:plan.id}
       
    }

    async update(dto){
        console.log(dto)
        const plan = await this.repository.Plan.findByPk(dto.id)
        if (plan){
            this.updateModel(plan, dto)
            await plan.save()
            return {id:plan.id}
        }else{
            throw new Error("Plan Not Found")
        }
        
    }

    updateModel(plan, dto) {
        plan.descuento = dto.descuento
        plan.descripcion = dto.descripcion
        plan.periodo = dto.periodo
        plan.precio = dto.precio
        plan.cantidad = dto.cantidad
        plan.name = dto.name
    }

    async updatePartial(dto){
        
        const plan = await this.repository.Plan.findByPk(dto.id)
        if (plan){
            plan.descuento = dto.descuento
            await plan.save()
            return {id:plan.id}
        }else{
            throw new Error("Plan Not Found")
        }
        
    }

    async delete(planId){
        
        const plan = await this.repository.Plan.findByPk(planId)
        if (plan){
            await plan.destroy({force:true}) 
        }else{
            throw new Error("Plan Not Found")
        }
        
    }

    async findAll(){
        const Planes =  await this.repository.Plan.findAll()
       return Planes.map(x=>this.mapper.Plan.mapperToDTO(x))
    }

}