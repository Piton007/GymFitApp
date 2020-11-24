import { Router as router} from "express"
import {body,validationResult} from "express-validator"


class AuthDeportistaRouter {
    constructor(service){
        this.service = service
        this.router = router()
        this.login()
    }
    login(){
        this.router.post("/login",[body('email','Introduzca un email valido').isEmail().normalizeEmail()
    ],async (req,res)=>{
            const errors  = validationResult(req)
            if(!errors.isEmpty()) res.status(400).send({errors:errors.array()})
            res.status(200).send(await this.service.login(req.body.email))
        })
    }

   
}

class AuthGimnasioRouter {
    constructor(service){
        this.service = service
        this.router = router()
        this.login()
    }
    login(){
        this.router.post("/login",[body('email','Introduzca un email valido').isEmail().normalizeEmail()
    ],async (req,res)=>{
            const errors  = validationResult(req)
            if(!errors.isEmpty()) res.status(400).send({errors:errors.array()})
            res.status(200).send(await this.service.login(req.body.email))
        })
    }

   
}
export default {
    Deportista:AuthDeportistaRouter,
    Gimnasio: AuthGimnasioRouter
}

export {AuthDeportistaRouter as Deportista, AuthGimnasioRouter as Gimnasio}