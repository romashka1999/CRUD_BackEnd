import { Router } from 'express';
import { UserMiddleware } from '../../middlewares';

export default class UserRouter {
    
    public router: Router;
    private userMiddleware: UserMiddleware;

    public constructor() {
        this.router = Router();
        this.userMiddleware = new UserMiddleware();
        this.addRoutes();
    }
    public addRoutes() {
        this.router.get('/getAllUsers', this.userMiddleware.getAllUsers);
    
        this.router.get('/getUserById/:id', this.userMiddleware.getUserById);
        
        this.router.post('/createUser', this.userMiddleware.createUser);
                
        this.router.post('/loginUser', this.userMiddleware.loginUser);
        
        this.router.delete('/deleteUserById/:id', this.userMiddleware.deleteUserById);
        
        this.router.put('/updateUserById/:id', this.userMiddleware.updateUserById);
    }
}
