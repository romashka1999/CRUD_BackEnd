import { Request, Response, NextFunction } from 'express';
import { AuthController } from "../../controllers";

const authController = new AuthController();

export default class AuthMiddleware {

    public async generateToken (id: any, req: Request, res: Response, next: NextFunction)  {
        try {
            const response: any = await authController.generateToken(id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public async verifyToken (req: Request, res: Response, next: NextFunction)  {
        try {
            const response: any = await authController.verifyToken(req.headers);
            next();
        } catch (error) {
            res.status(error.statusCode).json(error);
        }
    }

    public async refreshToken (req: Request, res: Response, next: NextFunction)  {
        try {
            const response: any = await authController.refreshToken(req.headers);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
    
}