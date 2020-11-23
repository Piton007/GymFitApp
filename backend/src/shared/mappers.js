
 class GimnasioMapper {
    static mapperToDTO(model){
        return {
            id:model.id,
            name:model.name,
            email:model.email,
            direccion:model.direccion,
            planes:  (model.plans) ? model.plans.map(x=>PlanMapper.mapperToDTO(Object.assign({},{gimnasioId:model.id},x.dataValues))) : []
        }
    }
}


 class DeportistaMapper {
    static mapperToDTO(model){
        return {
            id:model.id,
            name:model.name,
            email:model.email,
            suscriptions: (model.suscripciones) ? model.suscripciones : []
        }
    }
}



class SuscripcionMapper {
    static mapperToDTO(model){
        return {
            id:model.id,
            gym:model.plan.gimnasio.name,
            name:model.plan.name,
            descripcion:model.plan.descripcion,
            duracion:model.plan.periodo,
            precio:model.plan.precio
        }
    }
}

class PlanMapper {
    static mapperToDTO(model){

        return {
            id:model.id,
            cantidad:model.cantidad,
            gimnasio_id:model.gimnasioId,
            descuento:model.descuento,
            name:model.name,
            descripcion:model.descripcion,
            duracion:model.periodo,
            precio: model.precio,
            availability: Number(model.cantidad > 0) 
        }
    }
}

class EntrenadorMapper {
    static mapperToDTO(model){

        return {
            id:model.id,
            name:model.name,
            image:model.image
        }
    }
}

class MaquinaMapper {
    static mapperToDTO(model){

        return {
            id:model.id,
            name:model.name,
            image:model.image
        }
    }
}

export default {
    Deportista:DeportistaMapper,
    Gimnasio:GimnasioMapper,
    Suscripcion:SuscripcionMapper,
    Plan:PlanMapper,
    Entrenador:EntrenadorMapper,
    Maquina:MaquinaMapper
}

export {DeportistaMapper as Deportista, GimnasioMapper as Gimnasio}