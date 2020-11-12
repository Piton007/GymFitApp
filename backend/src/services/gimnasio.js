
export default class GimnasioService  {
    constructor(repository,mapper){
        this.mapper = mapper
        this.repository = repository
    }

    getById(id){
        const gimnasio =  await this.repository.Gimnasio.findByPk(id)
        if(gimnasio){
            return this.mapper.mapperToDTO(gimnasio)
        }
        throw new Error('Gimnasio Not Found')
    }

    getByIdAndPopulatePlans(){
        const gimnasio = await this.repository.Gimnasio.findOne({
            where:{
                id
            },
            include:[
                {
                    as: 'planes',
                    model:this.repository.Plan
                }
            ]
        })
        if(planes) return this.mapper.mapperToDTO(planes)
        throw new Error('Gimnasio Not Found')
    }
}