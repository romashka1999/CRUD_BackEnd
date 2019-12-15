import { Router } from 'express';
import { AccountMiddleware, AuthMiddleware } from '../../middlewares';

export default class AccountRouter {

    public router: Router;
    private accountMiddleware: AccountMiddleware;
    private authMiddleware: AuthMiddleware;
    
    public constructor() {
        this.router = Router();
        this.accountMiddleware = new AccountMiddleware();
        this.authMiddleware = new AuthMiddleware();
        this.addRoutes();
    }

    private addRoutes() {
        this.router.post('/createUser', this.accountMiddleware.createUser);

        this.router.post('/loginUser', this.accountMiddleware.loginUser, this.authMiddleware.generateToken);
        
        this.router.get('/getUser', this.authMiddleware.verifyToken, this.accountMiddleware.getUser);

        this.router.put('/updateUser', this.authMiddleware.verifyToken, this.accountMiddleware.updateUser);
    }
}
