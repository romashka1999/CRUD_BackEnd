import Joi from '@hapi/joi'

export const idSchema = Joi.object({
    id: Joi.number()
        .required()
});
