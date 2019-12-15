import Joi from '@hapi/joi'

export const userUpdateSchema = Joi.object({
    firstName: Joi.string()
        .min(3)
        .max(30),

    lastName: Joi.string()
        .min(3)
        .max(30),

    username: Joi.string()
        .min(3)
        .max(30),

    email: Joi.string()
        .email(),

    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{3,30}$/)
})
