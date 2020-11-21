

export default class PlanService  {
    constructor(repository,mapper){
        this.mapper = mapper
        this.repository = repository
    }

    async create(dto){
        const plan = await this.repository.Plan.create(dto)
        return {id:plan.id}
       
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