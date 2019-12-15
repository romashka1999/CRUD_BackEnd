import Joi from '@hapi/joi'

export const userLoginSchema = Joi.object({
    emailOrUsername: Joi.string()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{3,30}$/)
        .required(),   
});
