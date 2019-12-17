import { AdminRepository } from '../../repositories';
import { storeClient } from '../../store/store';
import { sendOtpToMailForPassRecover } from '../../helpers/sendOtpToMailForPassRecover';

import dotenv from 'dotenv';
dotenv.config();

export default class AdminService {

    private adminRepository: AdminRepository;
    
    public constructor(){
        this.adminRepository = new AdminRepository();
    }
    
    public async createAdmin(user: any) {
        try {
            const email = await this.adminRepository.getAdminByWhere({email: user.email});
            if( email !== null ) {
                throw({type: "ADMIN_SERVICE_ERROR", statusCode: 400, message: 'Email already exists'});
            }
        } catch (error) {
            throw(error);
        }
        const createdAdmin = await this.adminRepository.createAdmin(user);
        return createdAdmin;
    }

    public async getAllAdmins() {
        const admins = await this.adminRepository.getAllAdmins();
        return admins;
    }

    public async getAdminById(id: number) {
        const admin = await this.adminRepository.getAdminByWhere({id: id});
        return admin;
    }

    public async deleteAdminById(id: number) {
        const admin = await this.adminRepository.deleteAdminById(id);
        return admin;
    }

    public async updateAdminById(newUserBody: any, id: number) {
        const admin = await this.adminRepository.updateAdminById(newUserBody, id);
        return admin;
    }

    public async loginAdmin(body: any) {
        const where = { email: body.email,  password: body.password};
        const admin = await this.adminRepository.getAdminByWhere(where);
        if( admin != null ) {
            return admin;
        } else {
            throw({type: "ADMIN_SERVICE_ERROR", statusCode: 400, message: 'Email Or Password is not correct'});
        }
    }

    public async recoverPasswordSet(body: any) {
        const admin: any = await this.adminRepository.getAdminByWhere({email: body.email});
        if( admin === null ) {
            throw({type: "ADMIN_SERVICE_ERROR", statusCode: 400, message: 'Email is Not Valid'});
        } else {
            const min = 10000;
            const max = 99999;
            const key = admin.id;
            const otp = Math.floor(Math.random() * (max - min)) + min;
            const expireTime = Number.parseInt(process.env.RECOVER_PASSWORD_EMAIL_EXPIRATION as any);

            const redisSet = await storeClient.set(key, otp);
            const redisExpire = await storeClient.expire(key, expireTime);

            if( await !sendOtpToMailForPassRecover(body.email, otp)) {
                throw({type: "ADMIN_SERVICE_ERROR", statusCode: 500, message: 'Mail error'});
            }

            if(!redisSet || !redisExpire) {
                throw({type: "ADMIN_SERVICE_ERROR", statusCode: 500, message: 'Otp error'});
            } else {
                return 'successfully set otp';
            }
        }
    }

    public async recoverPasswordGet(body: any) {
        const admin: any = await this.adminRepository.getAdminByWhere({email: body.email});
        if( admin === null ) {
            throw({type: "ADMIN_SERVICE_ERROR", statusCode: 400, message: 'Email is Not Valid'});
        } else {
            const key = admin.id;
            const redisGet = await storeClient.get(key);
            if(!redisGet) {
                throw({type: "ADMIN_SERVICE_ERROR", statusCode: 400, message: 'Otp error'});
            } else {
                const id = Number.parseInt(admin.id);
                this.adminRepository.updateAdminById({password: body.password}, id);
                return 'successfully updated Password';
            }
        }

        
    }
}