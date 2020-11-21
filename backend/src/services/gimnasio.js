import Repository from "../domain/index"

export default class GimnasioService {
	constructor(repository, mapper) {
		this.mapper = mapper;
		this.repository = repository;
	}

	async getById(id) {
		const gimnasio = await this.repository.Gimnasio.findByPk(id);
		if (gimnasio) {
			return this.mapper.Gimnasio.mapperToDTO(gimnasio);
		}
		throw new Error("Gimnasio Not Found");
	}

	async getAll() {
        const gimnasios = await this.repository.Gimnasio.findAll();
        return gimnasios.map(this.mapper.Gimnasio.mapperToDTO)
	}

	async getByIdAndPopulatePlans(id) {
		const gimnasio = await this.repository.Gimnasio.findOne({
			where: {
				"id":id
			},
			include: [
				{
					model: this.repository.Plan,
				},
			],
		});
		
		if (gimnasio) return this.mapper.Gimnasio.mapperToDTO(gimnasio);
		throw new Error("Gimnasio Not Found");
	}
}
