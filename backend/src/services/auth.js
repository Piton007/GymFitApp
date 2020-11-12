import {Deportista as Mapper} from "../shared/mappers"

class AuthDeportistaService {
    constructor(repository,mapper){
        this.repository = repository
        this.mapper = mapper
    } 
    login(email){
        const auth = this.repository.Deportista.findOne({
            where:{
                email
            }
        })
        if (auth) return Mapper.Deportista.mapperToDTO(auth)
        throw new Error("Deportista Not Found")
    }
}

class AuthGimnasioService {
    constructor(repository,mapper){
        this.repository = repository
        this.mapper = mapper
    } 
    login(email){
        const auth = this.repository.Gimnasio.findOne({
            where:{
                email
            }
        })
        if (auth) return Mapper.Gimnasio.mapperToDTO(auth)
        throw new Error("Gimnasio Not Found")
    }
}
export {AuthDeportistaService as Deportista, AuthGimnasioService as Gimnasio}