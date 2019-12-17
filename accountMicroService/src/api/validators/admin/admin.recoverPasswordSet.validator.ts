import Joi from '@hapi/joi'

export const adminRecoverPasswordSet = Joi.object({
    email: Joi.string()
        .email()
        .required()
});
