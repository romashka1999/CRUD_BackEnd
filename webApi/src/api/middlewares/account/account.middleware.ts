import { Request, Response, NextFunction } from 'express';
import { AccountController } from "../../controllers";

const accountController =  new AccountController();

export default class AccountMiddleware {

    public async createUser (req: Request, res: Response, next: NextFunction)  {
        try {
            const response: any = await accountController.createUser(req.body);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
    
    public async getUser (id: any, req: Request, res: Response, next: NextFunction) {
        try {
            const response: any = await accountController.getUser(id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async updateUser (id: any, req: Request, res: Response, next: NextFunction) {
        try {
            const response: any = await accountController.updateUser(req.body, id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    };

    public async loginUser (req: Request, res: Response, next: NextFunction) {
        try {
            const response: any = await accountController.loginUser(req.body);
            const id: any= response.id;
            next(id);
        } catch (error) {
            next(error);
        }
    };
}