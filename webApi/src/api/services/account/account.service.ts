import axios from 'axios';

export default class AccountService {

    public async loginUser(body: any) {
        try {
            const response = await axios.post(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/user/loginUser`, body);
            return response;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }
    }

    public async createUser(body: any) {
        try {
            const response = await axios.post(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/user/createUser`, body);
            return response;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }   
    }

    public async getUser(id: any) {
        try {
            const response = await axios.get(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/user/getUserById/${id}`);
            return response;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }   
    }

    public async updateUser(body: any, id: any) {
        try {
            const response = await axios.put(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/user/updateUserById/${id}`, body);
            return response;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }   
    } 
}