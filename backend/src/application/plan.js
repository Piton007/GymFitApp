import { Router as router } from "express";
import { body, validationResult, query } from "express-validator";

export default class Router {
	constructor(service) {
		this.service = service;
		this.router = router();
		this.getAll();
		this.create();
		this.delete();
		this.put()
		this.patch();
	}
	async getAll() {
		this.router.get("/", async (req, res) => {
			res.status(200).send({
				data: await this.service.findAll(),
				message: "Se ha eliminado el plan con exito",
				errors: [],
			});
		});
	}
	async create() {
		this.router.post(
			"/",
			[
				body("gimnasio_id", "Ingresa un gimnasio valido")
					.notEmpty()
					.isInt()
					.toInt(),
				body("periodo", "Ingresa un periodo valido").notEmpty().isInt().toInt(),
				body("precio", "Ingresa un precio valido")
					.notEmpty()
					.isFloat()
					.toFloat(),
				body("descuento", "Descuento debe ser entre 10 y 90 porciento")
					.optional({ nullable: true })
					.isInt(),
				body("cantidad", "Ingresa una cantidad valida")
					.notEmpty()
					.isInt({ min: 1 })
					.toInt(),
				body("nombre", "Ingresa un nombre valido")
					.notEmpty()
					.isString()
					.isLength({ max: 20 }),
				body("descripcion", "Ingresa una descipcion valida")
					.notEmpty()
					.isString()
					.isLength({ max: 120 }),
			],
			async (req, res) => {
				try {
					const errors = validationResult(req);
					if (!errors.isEmpty()) {
						console.log(errors.array());
						res
							.status(400)
							.send({ message: "Error al crear", errors: errors.array() });
					} else {
						const id = await this.service.create(this.reqDTOBuilder(req));
						res.status(202).send({
							data: id,
							message: "El plan se ha creado con exito",
							errors: [],
						});
					}
				} catch (e) {
					res.status(400).send({ errors: e.message });
				}
			}
		);
	}
	async delete() {
		this.router.delete("/:id", async (req, res) => {
			if (req.params.id) {
				await this.service.delete(req.params.id);
				res.status(200).send({
					data: req.params.id,
					message: "Se ha eliminado el plan con exito",
					errors: [],
				});
			} else res.status(400).send({ errors: "El campo id es obligatorio" });
		});
	}
	async put() {
		this.router.put(
			"/:id",
			[
				body("periodo", "Ingresa un periodo valido").notEmpty().isInt().toInt(),
				body("precio", "Ingresa un precio valido")
					.notEmpty()
					.isFloat()
					.toFloat(),
				body("descuento", "Descuento debe ser entre 10 y 90 porciento")
					.optional({ nullable: true })
					.isInt(),
				body("cantidad", "Ingresa una cantidad valida")
					.notEmpty()
					.isInt({ min: 1 })
					.toInt(),
				body("nombre", "Ingresa un nombre valido")
					.notEmpty()
					.isString()
					.isLength({ max: 20 }),
				body("descripcion", "Ingresa una descipcion valida")
					.notEmpty()
					.isString()
					.isLength({ max: 120 })
			],
			async (req, res) => {
				req.body.id = req.params.id;
				const result = await this.service.update(this.reqUpdateDTO(req));
				res.status(200).send({
					data: result,
					message: "Se ha actualizado el plan con exito",
					errors: [],
				});
			}
		);
	}
	async patch() {
		this.router.patch(
			"/:id",
			[
				body("descuento", "Descuento debe ser entre 10 y 90 porciento")
					.optional({ nullable: true })
					.isInt()
					.isLength({ min: 10, max: 90 }),
			],
			async (req, res) => {
				if (req.params.id) {
					req.body.id = req.params.id;
					
					const result = await this.service.updatePartial(this.reqPatchBuilder(req));
					res.status(200).send({
						data: result,
						message: "Se ha actualizado el plan con exito",
						errors: [],
					});
				} else res.status(400).send({ errors: "El campo id es obligatorio" });
			}
		);
	}
	reqUpdateDTO(req){
		return{ 
			id:parseInt(req.body.id),
			periodo: req.body.periodo,
			precio: req.body.precio,
			descuento: req.body.descuento,
			cantidad: req.body.cantidad,
			name: req.body.nombre,
			descripcion: req.body.descripcion,
		}
	}
	reqPatchBuilder(req) {
		return {
			id: parseInt(req.body.id),
			descuento: req.body.descuento,
		};
	}
	reqDTOBuilder(req) {
		return {
			gimnasioId: req.body.gimnasio_id,
			periodo: req.body.periodo,
			precio: req.body.precio,
			descuento: req.body.descuento,
			cantidad: req.body.cantidad,
			name: req.body.nombre,
			descripcion: req.body.descripcion,
		};
	}
}
