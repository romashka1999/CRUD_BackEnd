import Joi from '@hapi/joi'

export const verifyTokenSchema = Joi.object({
    token: Joi.string()
        .required()     
});