import { generateTokenSchema, verifyTokenSchema, refreshTokenSchema } from '../../validators';
import { AuthService } from '../../services';


export default class AuthController {

    private authService: AuthService;

    public constructor() {
        this.authService = new AuthService();
    }

    public async generateToken(body: any) {
        const id = parseInt(body.id);
        const validGenerateToken = generateTokenSchema.validate({id});
        if(validGenerateToken.error) {
            const err = validGenerateToken.error.details[0].message; 
            throw({type: "AUTH_CONTROLLER_ERROR", statusCode: 400, message: err});
        } else {
            const token = await this.authService.generateToken(id);
            return token;
        }
    }

    public async verifyToken(body: any) {
        const validVerifyToken = verifyTokenSchema.validate(body);
        if(validVerifyToken.error) {
            const err = validVerifyToken.error.details[0].message; 
            throw({type: "AUTH_CONTROLLER_ERROR", statusCode: 400, message: err});
        } else {
            const token = await this.authService.verifyToken(body.token);
            return token;
        }
    }

    public async refreshToken(body: any) {
        const validRefreshToken = refreshTokenSchema.validate(body);
        if(validRefreshToken.error) {
            const err = validRefreshToken.error.details[0].message; 
            throw({type: "AUTH_CONTROLLER_ERROR", statusCode: 400, message: err});
        } else {
            const token = await this.authService.refreshToken(body.token, body.refreshToken);
            return token;
        }    
    }

}