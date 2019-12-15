import { AdminRepository } from '../../repositories';


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
}