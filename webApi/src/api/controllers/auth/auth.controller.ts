import { AuthService } from '../../services';

export default class AuthController {

    private authService: AuthService;

    public constructor() {
        this.authService = new AuthService();
    }
    
    public async generateToken(id: any) {
        const response: any = await this.authService.generateToken(id);
        return response;
    }

    public async verifyToken(body: any) {
        const authObj = {
            token: body.token,
        };
        const response: any = await this.authService.verifyToken(authObj);
        return response;
    }
    
    public async refreshToken(body: any) {
        const authObj = {
            token: body.token,
            refreshToken: body.refreshToken
        };
        const response: any = await this.authService.refreshToken(authObj);
        return response;
    }
}