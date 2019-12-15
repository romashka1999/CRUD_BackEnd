import jwt from 'jsonwebtoken';
import * as uuid from 'uuid';
import dotenv from 'dotenv';
dotenv.config();

export default class AuthService {

    private refreshTokens: any;

    public constructor() {
        this.refreshTokens = [];
    }

    public async generateToken(id: number) {
        try {
            const SECRET = process.env.SECRET_KEY as string;
            const TOKEN_EXPIRE_TIME = process.env.TOKEN_EXPIRE_TIME as string;
            try {
                const token = await jwt.sign({_id: id}, SECRET, {expiresIn: TOKEN_EXPIRE_TIME});
                const refreshToken = uuid.default();
                this.refreshTokens.push(refreshToken);
                return {token: token, refreshToken: refreshToken};
            } catch (error) {
                throw(error);
            }
        } catch (error) {
            throw({type: "AUTH_SERVICE_ERROR", statusCode: 400, message: error});
        }
    }

    public async verifyToken(token: string) {
        try {
            const SECRET =  process.env.SECRET_KEY as string;
            try {
                const verifiedUserId: any = await jwt.verify(token , SECRET);
                return verifiedUserId;
            } catch(err) {
                throw(err);
            }
        } catch(error) {
            throw({type: "AUTH_SERVICE_ERROR", statusCode: 400, message: error});
        }
    }

    public async refreshToken(token: string, oldRefreshToken: string) {
        try {
            try {
                const verifiedUserId: any = await this.verifyToken(token);
                for( let ref of this.refreshTokens ) {
                    if( ref === oldRefreshToken ) {
                        try {
                            const response = await this.generateToken(verifiedUserId);
                            delete this.refreshTokens[oldRefreshToken];
                            return response;
                        } catch (error) {
                            throw(error);
                        }
                    }
                }  
                throw({type: "AUTH_SERVICE_ERROR", statusCode: 400, message: 'refreshToken is not valid'});
            } catch (error) {
                throw(error);
            }
        } catch (error) {
            throw({type: "AUTH_SERVICE_ERROR", statusCode: 400, message: error});
        }
    }
}