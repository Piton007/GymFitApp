import  Repository from "../domain/index"
import {Deportista as Mapper} from "../shared/mappers"

class AuthDeportistaService {
    constructor(repository,mapper){
        this.repository = repository
        this.mapper = mapper
    } 
    login(email){
        const auth = Repository.Deportista.findOne({
            where:{
                email
            }
        })
        if (auth) return Mapper.mapperToDTO(auth)
        throw new Error("Deportista Not Found")
    }
}

class AuthGimnasioService {
    constructor(repository,mapper){
        this.repository = repository
        this.mapper = mapper
    } 
    login(email){
        const auth = Repository.Gimnasio.findOne({
            where:{
                email
            }
        })
        if (auth) return Mapper.mapperToDTO(auth)
        throw new Error("Gimnasio Not Found")
    }
}
export {AuthDeportistaService as Deportista, AuthGimnasioService as Gimnasio}