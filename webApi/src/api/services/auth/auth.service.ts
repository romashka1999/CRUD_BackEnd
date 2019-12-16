import axios from 'axios';

export default class AuthService {

    public async generateToken(id: any) {
        try {
            const response: any = await axios.post(process.env.AUTH_MICROSERVICE_HOST + `/auth/generateToken`, {id: id});  
            return response.data;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }
    }

    public async verifyToken(authObj: any) {
        try {
            const response: any = await axios.post(process.env.AUTH_MICROSERVICE_HOST + `/auth/verifyToken`, authObj);  
            return response.data;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }
    }

    public async refreshToken(authObj: any) {
        try {
            const response: any = await axios.post(process.env.AUTH_MICROSERVICE_HOST + `/auth/refreshToken`, authObj);  
            return response.data;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }
    }
}