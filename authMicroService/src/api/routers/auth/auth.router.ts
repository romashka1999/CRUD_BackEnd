import { AuthMiddleware } from '../../middlewares';
import { Router } from 'express';


export default class AuthRouter {

    public router: Router;
    private authMiddleware: AuthMiddleware;

    public constructor() {
        this.router = Router();
        this.authMiddleware = new AuthMiddleware;
        this.addRoutes();
    }

    private addRoutes() {
        this.router.post('/generateToken', this.authMiddleware.generateToken);
        
        this.router.post('/verifyToken', this.authMiddleware.verifyToken);
        
        this.router.post('/refreshToken', this.authMiddleware.refreshToken);
    }
}


