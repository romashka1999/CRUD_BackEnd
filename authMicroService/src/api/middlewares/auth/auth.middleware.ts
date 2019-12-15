import { Request, Response, NextFunction } from 'express';
import { AuthController } from "../../controllers";

const authController =  new AuthController();

export default class AuthMiddleware {
    
    public async generateToken (req: Request, res: Response, next: NextFunction) {
        try {
            const response = await authController.generateToken(req.body);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async verifyToken (req: Request, res: Response, next: NextFunction) {
        try {
            const response = await authController.verifyToken(req.body);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async refreshToken (req: Request, res: Response, next: NextFunction) {
        try {
            const response = await authController.refreshToken(req.body);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
}