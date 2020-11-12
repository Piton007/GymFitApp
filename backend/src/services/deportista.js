import  Repository from "../domain/index"

import {Deportista as Mapper} from "../shared/mappers"

export default class DeportistaService {
    constructor(repository){
        this.repository = repository
      
    }

    async getById(id){
        const deportista =  await this.repository.Deportista.findByPk(id)
        if(deportista){
            return Mapper.mapperToDTO(deportista)
        }
        throw new Error('Deportista Not Found')
    }

    async getUserAndPopulateSuscriptions(id){
        const deportista = await this.repository.Deportista.findOne({
            where:{
                id
            },
            include:[
                {
                    as: 'suscripciones',
                    model:this.repository.Suscripcion
                }
            ]
        })
        if(deportista) return Mapper.mapperToDTO(deportista)
        throw new Error('Deportista Not Found')
        
    }
}   