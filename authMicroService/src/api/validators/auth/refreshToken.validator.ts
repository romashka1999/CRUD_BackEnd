import Joi from '@hapi/joi'

export const refreshTokenSchema = Joi.object({
    token: Joi.string()
        .required(),

    refreshToken: Joi.string()
        .required()
});