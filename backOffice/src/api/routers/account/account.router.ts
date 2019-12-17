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
        this.router.post('/loginAdmin', this.accountMiddleware.loginAdmin, this.authMiddleware.generateToken);
        
        this.router.get('/getAllAdmins', this.authMiddleware.verifyToken, this.accountMiddleware.getAllAdmins);

        this.router.get('/getAdminById/:id', this.authMiddleware.verifyToken, this.accountMiddleware.getAdminById);

        this.router.post('/createAdmin', this.authMiddleware.verifyToken, this.accountMiddleware.createAdmin);

        this.router.delete('/deleteAdminById/:id', this.authMiddleware.verifyToken, this.accountMiddleware.deleteAdminById);

        this.router.put('/updateAdminById/:id', this.authMiddleware.verifyToken, this.accountMiddleware.updateAdminById);

        this.router.get('/getAllUsers', this.authMiddleware.verifyToken, this.accountMiddleware.getAllUsers);

        this.router.get('/getUserById/:id', this.authMiddleware.verifyToken, this.accountMiddleware.getUserById);

        this.router.post('/createUser', this.authMiddleware.verifyToken, this.accountMiddleware.createUser);

        this.router.delete('/deleteUserById/:id', /*this.authMiddleware.verifyToken,*/ this.accountMiddleware.deleteUserById);

        this.router.put('/updateUserById/:id', this.authMiddleware.verifyToken, this.accountMiddleware.updateUserById);
    }
}
