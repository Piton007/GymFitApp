import {Deportista as Mapper} from "../shared/mappers"

class AuthDeportistaService {
    constructor(repository,mapper){
        this.repository = repository
        this.mapper = mapper
    } 
    async login(email){
        const auth = await this.repository.Deportista.findOne({
            where:{
                email
            }
        })
        if (auth) return this.mapper.Deportista.mapperToDTO(auth)
        throw new Error("Deportista Not Found")
    }
}

class AuthGimnasioService {
    constructor(repository,mapper){
        this.repository = repository
        this.mapper = mapper
    } 
    async login(email){
        const auth = await this.repository.Gimnasio.findOne({
            where:{
                email
            }
        })
        if (auth) return this.mapper.Gimnasio.mapperToDTO(auth)
        throw new Error("Gimnasio Not Found")
    }
}
export {AuthDeportistaService as Deportista, AuthGimnasioService as Gimnasio}