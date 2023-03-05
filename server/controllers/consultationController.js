const uuid = require('uuid')
const path = require('path');
const ApiError = require('../error/ApiError')
const {Consultation, ConsultationInfo} = require('../models/models')
const {where} = require("sequelize");
class consultationController {
    async create(req, res, next) {
        try {
            let {name, price, authorId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const consultation = await Consultation.create({name, price, typeId, authorId, img: fileName})
            if(info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ConsultationInfo.create({
                        title: i.title,
                        description: i.description,
                        consultationId: consultation.id
                    })
                )
            }
            return res.json(consultation)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        let {authorId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let consultations;
        if (!authorId && !typeId) {
            consultations = await Consultation.findAndCountAll({limit, offset})
        }
        if (authorId && !typeId) {
            consultations = await Consultation.findAndCountAll({where:{authorId}, limit, offset})
        }
        if (!authorId && typeId) {
            consultations = await Consultation.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (authorId && typeId) {
            consultations = await Consultation.findAndCountAll({where:{authorId, typeId}, limit, offset})
        }
        return res.json(consultations)
    }
    async getOne(req, res) {
        const {id} = req.params
        const consultation = await Consultation.findOne(
            {
                where: {id},
                include: [{model: ConsultationInfo, as: 'info'}]
            },
        )
        return res.json(consultation)
    }
}

module.exports = new consultationController()