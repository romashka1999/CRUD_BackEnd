import { Admin } from '../../../models';

export default interface IAdminRepository {
    getAllAdmins(): any;
    getAdminByWhere(where: any): any;
    createAdmin(admin: Admin): any;
    deleteAdminById(id: number): any;
    updateAdminById(updatedBody: any, id: number): any;
}