import {Sequelize} from "sequelize"

class Persistance {
     
    constructor(uri){
        this.uri = uri
    }

    getDBContext(){
        const sequalize = new Sequelize(this.uri)
        try {
            await sequalize.authenticate()
            return sequalize
        } catch (error) {
            console.log(error)
            process.exit(1)
        }
    }

} 