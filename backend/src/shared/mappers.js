
 class GimnasioMapper {
    static mapperToDTO(model){
        return {
            id:model.id,
            name:model.name,
            email:string,
            planes:  (model.planes) ? model.planes : []
        }
    }
}


 class DeportistaMapper {
    static mapperToDTO(model){
        return {
            id:model.id,
            name:model.name,
            email:string,
            suscriptions: (model.suscripciones) ? model.suscripciones : []
        }
    }
}



class SuscripcionMapper {
    static mapperToDTO(model){
        return {
            id:model.id,
            name:model.Plan.name,
            descripcion:model.Plan.descripcion,
            duracion:model.Plan.periodo,
            precio:model.Plan.precio
        }
    }
}

class PlanMapper {
    static mapperToDTO(model){
        return {
            id:model.id,
            name:model.name,
            descripcion:model.descripcion,
            duracion:`${model.periodo} meses`,
            precio: `S/${model.precio}`,
            availability: Number(model.cantidad > 0) 
        }
    }
}

export default {
    Deportista:DeportistaMapper,
    Gimnasio:GimnasioMapper,
    Suscripcion:SuscripcionMapper,
    Plan:PlanMapper
}

export {DeportistaMapper as Deportista, GimnasioMapper as Gimnasio}