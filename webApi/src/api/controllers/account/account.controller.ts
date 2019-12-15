import { AccountService } from '../../services';


export default class AccountController {

    private accountService: AccountService;

    public constructor() {
        this.accountService = new AccountService();
    }
    

    public async createUser(body: any) {
        const response: any = await this.accountService.createUser(body);
        return response;
    }

    public async getUser(id: any) {
        const response: any = await this.accountService.getUser(id);
        return response;
    }

    public async updateUser(body: any, id: any) {
        const response: any = await this.accountService.updateUser(body, id);
        return response;
    } 

    public async loginUser(body: any) {
        const response: any = await this.accountService.loginUser(body);
        return response;
    } 
    
}