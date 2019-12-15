import { adminCreateLoginSchema, adminUpdateSchema, idSchema } from '../../validators';
import { AdminService } from '../../services';


export default class AdminController {

    private adminService: AdminService;

    public constructor() {
        this.adminService = new AdminService();
    }
    
    public async createAdmin(body: any) {
        const validAdmin = adminCreateLoginSchema.validate(body);
        if(validAdmin.error) {
            const err = validAdmin.error.details[0].message; 
            throw({type: "ADMIN_CONTROLLER_ERROR", statusCode: 400, message: err})
        } else {
            const response = await this.adminService.createAdmin(validAdmin.value);
            return response;
        }
    }

    public async getAllAdmins() {
        const response = await this.adminService.getAllAdmins();
        return response;
    }

    public async getAdminById(id: any) {
        id = Number.parseInt(id);
        const validId = idSchema.validate({id});
        if(validId.error) {
            const err = validId.error.details[0].message; 
            throw({type: "ADMIN_CONTROLLER_ERROR", statusCode: 400, message: err})
        } else {
            const response = await this.adminService.getAdminById(id);
            return response;
        }
    }

    public async deleteAdminById(id: any) {
        id = Number.parseInt(id);
        const validId = idSchema.validate({id});
        if(validId.error) {
            const err = validId.error.details[0].message; 
            throw({type: "ADMIN_CONTROLLER_ERROR", statusCode: 400, message: err})
        } else {
            const response = await this.adminService.deleteAdminById(id);
            return response;
        }
    }

    public async updateAdminById(body: any, id: any) {
        id = Number.parseInt(id);
        const validId = idSchema.validate({id});
        if(validId.error) {
            const err = validId.error.details[0].message; 
            throw({type: "ADMIN_CONTROLLER_ERROR", statusCode: 400, message: err})
        } else {
            const validAdmin = adminUpdateSchema.validate(body);
            if(validAdmin.error) {
                const err = validAdmin.error.details[0].message; 
                throw({type: "ADMIN_CONTROLLER_ERROR", statusCode: 400, message: err});
            } else {
                const response = await this.adminService.updateAdminById(validAdmin.value, id);
                return response;
            }
        }
    } 

    public async loginAdmin(body: any) {
        const validAdmin = adminCreateLoginSchema.validate(body);
        if(validAdmin.error) {
            const err = validAdmin.error.details[0].message; 
            throw({type: "ADMIN_CONTROLLER_ERROR", statusCode: 400, message: err})
        } else {
            const response = await this.adminService.loginAdmin(validAdmin.value);
            return response;
        }
    }
}