

export default class PlanService  {
    constructor(repository,mapper){
        this.mapper = mapper
        this.repository = repository
    }

    async create(dto){
        const plan = await this.repository.Plan.create(...dto)
        return {id:plan.id}
       
    }

    async delete(planId){
        const plan = await this.repository.Plan.findByPk(planId)
        if (plan){
            await plan.destroy()
        }
        throw new Error("Plan Not Found")
    }

    async findAll(gimnasioId){
        const Planes =  await this.repository.Plan.findAll({
            where:{
                gimnasioId
            }
        })
       return Planes.map(x=>this.mapper.Plan.mapperToDTO(x))
    }

}