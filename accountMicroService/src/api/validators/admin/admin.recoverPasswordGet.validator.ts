import Joi from '@hapi/joi'

export const adminRecoverPasswordGet = Joi.object({
    email: Joi.string()
        .email()
        .required(),
        
    otp: Joi.string()
        .email()
        .required(),
    
    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{3,30}$/) 
        .required()
});
