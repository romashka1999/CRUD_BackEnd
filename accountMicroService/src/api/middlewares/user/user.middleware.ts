import { Request, Response, NextFunction } from 'express';
import { UserController } from "../../controllers";

const userController = new UserController();

export default class UserMiddleware {

    public async createUser (req: Request, res: Response, next: NextFunction) {
        try {
            const response = await userController.createUser(req.body);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async deleteUserById (req: Request, res: Response, next: NextFunction) {
        try {
            const response = await userController.deleteUserById(req.params.id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async loginUser (req: Request, res: Response, next: NextFunction) {
        try {
            const response = await userController.loginUser(req.body);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async getAllUsers (req: Request, res: Response, next: NextFunction) {
        try {
            const response = await userController.getAllUsers();
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
    
    public async getUserById (req: Request, res: Response, next: NextFunction) {
        try {
            const response = await userController.getUserById(req.params.id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async updateUserById (req: Request, res: Response, next: NextFunction) {
        try {
            const response = await userController.updateUserById(req.body, req.params.id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
    
}