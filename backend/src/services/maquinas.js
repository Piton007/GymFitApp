

export default class MaquinaService {
	constructor(repository, mapper) {
		this.mapper = mapper;
		this.repository = repository;
	}

	async deleteById(id) {
		const maquina = await this.repository.Maquina.findByPk(id);
		if (maquina) {
            await maquina.destroy()
		}
		throw new Error("Maquina Not Found");
	}

	async getAllByGimnasioId(gimnasioId) {
        const maquinas = await this.repository.Maquina.findAll({where:{gimnasioId}});
        return maquinas.map(this.mapper.Maquina.mapperToDTO)
	}

}
