import { Request, Response, NextFunction } from 'express';
import { AccountController } from "../../controllers";

const accountController =  new AccountController();

export default class AccountMiddleware {

    public async createAdmin (req: Request, res: Response, next: NextFunction)  {
        try {
            const response: any = await accountController.createAdmin(req.body);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async deleteAdminById (req: Request, res: Response, next: NextFunction) {
        try {
            const response: any = await accountController.deleteAdminById(req.params.id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async loginAdmin (req: Request, res: Response, next: NextFunction) {
        try {
            const response: any = await accountController.loginAdmin(req.body);
            const id = response.id;
            next(id);
        } catch (error) {
            next(error);
        }
    }

    public async getAllAdmins (req: Request, res: Response, next: NextFunction) {
        try {
            const response: any = await accountController.getAllAdmins();
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
    
    public async getAdminById (req: Request, res: Response, next: NextFunction) {
        try {
            const response: any = await accountController.getAdminById(req.params.id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async updateAdminById (req: Request, res: Response, next: NextFunction) {
        try {
            const response: any = await accountController.updateAdminById(req.body, req.params.id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async createUser (req: Request, res: Response, next: NextFunction)  {
        try {
            const response: any = await accountController.createUser(req.body);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async deleteUserById (req: Request, res: Response, next: NextFunction) {
        try {
            const response: any = await accountController.deleteUserById(req.params.id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async getAllUsers (req: Request, res: Response, next: NextFunction) {
        try {
            const response: any = await accountController.getAllUsers();
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
    
    public async getUserById (req: Request, res: Response, next: NextFunction) {
        try {
            const response: any = await accountController.getUserById(req.params.id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async updateUserById (req: Request, res: Response, next: NextFunction) {
        try {
            const response: any = await accountController.updateUserById(req.body, req.params.id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    };
}