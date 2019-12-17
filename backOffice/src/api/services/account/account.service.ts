import axios from 'axios';

export default class AccountService {

     
    public async createAdmin(body: any) {
        try {
            const response: any = await axios.post(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/admin/createAdmin`, body);  
            return response.data;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }
    }

    public async getAllAdmins() {
        try {
            const response: any = await axios.get(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/admin/getAllAdmins`);
            return response.data;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }
    }

    public async getAdminById(id: any) {
        try {
            const response: any = await axios.get(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/admin/getAdminById/${id}`);
            return response.data;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }
    }

    public async deleteAdminById(id: any) {
        try {
            const response: any = axios.delete(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/admin/deleteAdminById/${id}`);
            return response.data;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }
    }

    public async updateAdminById(body: any, id: any) {
        try {
            const response: any = await axios.put(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/admin/updateAdminById/${id}`, body);
            return response.data;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }
    } 

    public async loginAdmin(body: any) {
        try {
            const response: any = await axios.post(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/admin/loginAdmin`, body);
            return response.data;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }
    }

    public async createUser(body: any) {
        try {
            const response: any = await axios.post(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/user/createUser`, body);
            return response.data;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }   
    }

    public async getAllUsers() {
        try {
            const response: any = await axios.get(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/user/getAllUsers`);
            return response.data;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }   
    }

    public async getUserById(id: any) {
        try {
            const response = await axios.get(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/user/getUserById/${id}`);
            return response.data;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }   
    }

    public async deleteUserById(id: any) {
        try {
            const response: any = await axios.delete(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/user/deleteUserById/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
            const err = error.response.data;
            throw(err);
        }   
    }

    public async updateUserById(body: any, id: any) {
        try {
            const response: any = await axios.put(process.env.ACCOUNT_MICROSERVICE_HOST + `/account/user/updateUserById/${id}`, body);
            return response.data;
        } catch (error) {
            const err = error.response.data;
            throw(err);
        }   
    } 
}