import { Admin } from '../../models';
import { IAdminRepository } from '../Irepositories'

export default class AdminRepository implements IAdminRepository {

    public async getAllAdmins() {
        try {
            const admins = await Admin.findAll();
            return admins;
        } catch (error) {
            throw({type: "ADMIN_REPOSITORY_ERROR", statusCode: 400, message: error});
        }
    }

    public async getAdminByWhere(where: any) {
        try {
            const admin = await Admin.findOne({where: where});
            return admin;
        } catch (error) {
            throw({type: "ADMIN_REPOSITORY_ERROR", statusCode: 400, message: error});
        }
    }
    
    public async createAdmin(admin: Admin) {
        try {
            const createdAdmin = await Admin.create(admin);
            return createdAdmin;
        } catch (error) {
            throw({type: "ADMIN_REPOSITORY_ERROR", statusCode: 400, message: error});
        }
    }

    public async deleteAdminById(id: number) {
        try {
            const deletedAdmin = await Admin.destroy({where: {id: id}});
            if(deletedAdmin === 0) {
                throw('Admin doest not exist');
            }
            if(deletedAdmin === 1) {
                return 'Admin Successfully deleted';
            }
        } catch (error) {
            throw({type: "ADMIN_REPOSITORY_ERROR", statusCode: 400, message: error});
        }
    }

    public async updateAdminById(updatedBody: any, id: number) {
        try {
            const updatedAdmin = await Admin.update(updatedBody,{where: {id: id}});
            if(!updatedAdmin[0]) {
                throw('Admin does not exist');
            } else {
                return 'Admin successfully updated';
            }
        } catch (error) {
            throw({type: "ADMIN_REPOSITORY_ERROR", statusCode: 400, message: error});
        }
    }

}