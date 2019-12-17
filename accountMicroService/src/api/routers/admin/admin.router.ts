import { Router } from 'express';
import { AdminMiddleware } from '../../middlewares';

export default class AdminRouter {

    public router: Router;
    private adminMiddleware: AdminMiddleware;
    
    public constructor() {
        this.router = Router();
        this.adminMiddleware = new AdminMiddleware();
        this.addRoutes();
    }

    private addRoutes() {
        this.router.get('/getAllAdmins', this.adminMiddleware.getAllAdmins);

        this.router.get('/getAdminById/:id', this.adminMiddleware.getAdminById);

        this.router.post('/createAdmin', this.adminMiddleware.createAdmin);

        this.router.post('/loginAdmin', this.adminMiddleware.loginAdmin);

        this.router.delete('/deleteAdminById/:id', this.adminMiddleware.deleteAdminById);

        this.router.put('/updateAdminById/:id', this.adminMiddleware.updateAdminById);

        this.router.post('/recoverPassword/set', this.adminMiddleware.recoverPasswordSet);

        this.router.post('/recoverPassword/get', this.adminMiddleware.recoverPasswordGet)
    }
}
