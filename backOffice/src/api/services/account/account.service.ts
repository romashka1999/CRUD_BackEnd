import axios from 'axios';

export default class AccountService {

     
    public async createAdmin(body: any) {
        try {
            const response = await axios.post(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/admin/createAdmin`, body);  
            return response;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }
    }

    public async getAllAdmins() {
        try {
            const response = await axios.get(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/admin/getAllAdmins`);
            return response;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }
    }

    public async getAdminById(id: any) {
        try {
            const response = await axios.get(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/admin/getAdminById/${id}`);
            return response;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }
    }

    public async deleteAdminById(id: any) {
        try {
            const response = axios.delete(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/admin/deleteAdminById/${id}`);
            return response;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }
    }

    public async updateAdminById(body: any, id: any) {
        try {
            const response = await axios.put(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/admin/updateAdminById/${id}`, body);
            return response;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }
    } 

    public async loginAdmin(body: any) {
        try {
            const response = await axios.post(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/admin/loginAdmin`, body);
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

    public async getAllUsers() {
        try {
            const response = await axios.get(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/user/getAllUsers`);
            return response;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }   
    }

    public async getUserById(id: any) {
        try {
            const response = await axios.get(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/user/getUserById/${id}`);
            return response;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }   
    }

    public async deleteUserById(id: any) {
        try {
            const response = await axios.put(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/user/deleteUserById/${id}`);
            return response;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }   
    }

    public async updateUserById(body: any, id: any) {
        try {
            const response = await axios.put(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/user/updateUserById/${id}`, body);
            return response;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }   
    } 
}