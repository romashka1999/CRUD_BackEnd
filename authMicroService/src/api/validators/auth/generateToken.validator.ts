import Joi from '@hapi/joi'

export const generateTokenSchema = Joi.object({
    id: Joi.number()
        .required()
});