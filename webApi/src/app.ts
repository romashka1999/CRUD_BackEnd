import express ,{ Application, Request, Response, NextFunction, Router } from 'express';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as routers from './api/routers';


class App {

    private app: Application;
    private accountRouter: Router;
    private authRouter: Router;

    public constructor() {
        this.app = express();
        this.middlewares();
        this.accountRouter = new routers.AccountRouter().router;
        this.authRouter = new routers.AuthRouter().router;
        this.routes();
        this.errorHandler();
    }


    private middlewares() {
        dotenv.config();

        const PORT = process.env.SERVER_PORT || 3000;
        this.app.set('port', PORT);

        this.app.use(fileUpload({
            limits: { fileSize: 50 * 1024 * 1024 },
        }));

        this.app.use(morgan('dev'));

        this.app.use(cors());
        this.app.use((req: Request, res: Response, next: NextFunction) => {
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
                if(req.method === "OPTIONS"){
                    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
                    return res.status(200).json({});
                }
                next();
        });

        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(bodyParser.json());
    }


    private routes() {
        this.app.use('/account', this.accountRouter);
        this.app.use('/auth', this.authRouter);
    }
    
    private errorHandler() {
        this.app.use((error:any, req: Request, res: Response, next: NextFunction) => {
            const status = error.statusCode || 500;
            if(status === 500){
                error = new Error('server internal error').message;
            }
            res.status(status).json(error);
        })
    }

    public start() {
        this.app.listen( this.app.get('port'), () => {
            console.log(`webApi server successfully listening to the port: ${this.app.get('port')}`);
        })
    }

}


export default App;