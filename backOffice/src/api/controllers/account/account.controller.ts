import { AccountService } from '../../services';


export default class AccountController {

    private accountService: AccountService;

    public constructor() {
        this.accountService = new AccountService();
    }
    
    public async createAdmin(body: any) {
        const response: any = await this.accountService.createAdmin(body);
        return response;
    }

    public async getAllAdmins() {
        const response: any = await this.accountService.getAllAdmins();
        return response;
    }

    public async getAdminById(id: any) {
        const response: any = await this.accountService.getAdminById(id);
        return response;
    }

    public async deleteAdminById(id: any) {
        const response: any = await this.accountService.deleteAdminById(id);
        return response;
    }

    public async updateAdminById(body: any, id: any) {
        const response: any = await this.accountService.updateAdminById(body, id);
        return response;
    } 

    public async loginAdmin(body: any) {
        const response: any = await this.accountService.loginAdmin(body);
        return response;
    }

    public async createUser(body: any) {
        const response: any = await this.accountService.createUser(body);
        return response;
    }

    public async getAllUsers() {
        const response: any = await this.accountService.getAllUsers();
        return response;
    }

    public async getUserById(id: any) {
        const response: any = await this.accountService.getUserById(id);
        return response;
    }

    public async deleteUserById(id: any) {
        const response: any = await this.accountService.deleteUserById(id);
        return response;
    }

    public async updateUserById(body: any, id: any) {
        const response: any = await this.accountService.updateUserById(body, id);
        return response;
    } 
}