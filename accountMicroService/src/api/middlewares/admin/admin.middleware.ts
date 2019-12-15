import { Request, Response, NextFunction } from 'express';
import { AdminController } from "../../controllers";

const adminController =  new AdminController();

export default class AdminMiddleware {
    
    public async createAdmin (req: Request, res: Response, next: NextFunction)  {
        try {
            const response = await adminController.createAdmin(req.body);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async deleteAdminById (req: Request, res: Response, next: NextFunction) {
        try {
            const response = await adminController.deleteAdminById(req.params.id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async loginAdmin (req: Request, res: Response, next: NextFunction) {
        try {
            const response = await adminController.loginAdmin(req.body);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async getAllAdmins (req: Request, res: Response, next: NextFunction) {
        try {
            const response = await adminController.getAllAdmins();
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
    
    public async getAdminById (req: Request, res: Response, next: NextFunction) {
        try {
            const response = await adminController.getAdminById(req.params.id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async updateAdminById (req: Request, res: Response, next: NextFunction) {
        try {
            const response = await adminController.updateAdminById(req.body, req.params.id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    };
}