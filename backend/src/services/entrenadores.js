

export default class EntrenadorService {
	constructor(repository, mapper) {
		this.mapper = mapper;
		this.repository = repository;
	}

	async deleteById(id) {
		const entrenador = await this.repository.Entrenador.findByPk(id);
		if (entrenador) {
            await entrenador.destroy()
		}
		throw new Error("entrenador Not Found");
	}

	async getAllByGimnasioId(gimnasioId) {
        const entrenador = await this.repository.Entrenador.findAll({where:{gimnasioId}});
        return entrenador.map(this.mapper.Entrenador.mapperToDTO)
	}

}
