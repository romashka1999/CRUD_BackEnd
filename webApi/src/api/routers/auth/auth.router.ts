import { Router } from 'express';
import { AuthMiddleware } from '../../middlewares';

export default class CustomerRouter {
    
    public router: Router;
    private authMiddleware: AuthMiddleware;

    public constructor() {
        this.router = Router();
        this.authMiddleware = new AuthMiddleware();
        this.addRoutes();
    }
    public addRoutes() {
        this.router.post('/refreshToken', this.authMiddleware.refreshToken);
    }
}
