import { userCreateSchema, userUpdateSchema, userLoginSchema, idSchema } from '../../validators';
import { UserService } from '../../services';


export default class UserController {

    private userService: UserService;

    public constructor() {
        this.userService = new UserService();
    }
    
    public async createUser(body: any) {
        const validUser = userCreateSchema.validate(body);
        if(validUser.error) {
            const err = validUser.error.details[0].message; 
            throw({type: "User_CONTROLLER_ERROR", statusCode: 400, message: err})
        } else {
            const response = await this.userService.createUser(validUser.value);
            return response;
        }
    }


    public async getAllUsers() {
        const response = await this.userService.getAllUsers();
        return response;
    }

    public async getUserById(id: any) {
        id = Number.parseInt(id);
        const validId = idSchema.validate({id});
        if(validId.error) {
            const err = validId.error.details[0].message; 
            throw({type: "User_CONTROLLER_ERROR", statusCode: 400, message: err})
        } else {
            const response = await this.userService.getUserById(id);
            return response;
        }
    }

    public async deleteUserById(id: any) {
        id = Number.parseInt(id);
        const validId = idSchema.validate({id});
        if(validId.error) {
            const err = validId.error.details[0].message; 
            throw({type: "User_CONTROLLER_ERROR", statusCode: 400, message: err})
        } else {
            const response = await this.userService.deleteUserById(id);
            return response;
        }
    }

    public async updateUserById(body: any, id: any) {
        id = Number.parseInt(id);
        const validId = idSchema.validate({id});
        if(validId.error) {
            const err = validId.error.details[0].message; 
            throw({type: "User_CONTROLLER_ERROR", statusCode: 400, message: err})
        } else {
            const validUser = userUpdateSchema.validate(body);
            if(validUser.error) {
                const err = validUser.error.details[0].message; 
                throw({type: "User_CONTROLLER_ERROR", statusCode: 400, message: err});
            } else {
                const response = await this.userService.updateUserById(validUser.value, id);
                return response;
            }
        }
    } 

    public async loginUser(body: any) {
        const validUser = userLoginSchema.validate(body);
        if(validUser.error) {
            const err = validUser.error.details[0].message; 
            throw({type: "User_CONTROLLER_ERROR", statusCode: 400, message: err})
        } else {
            const response = await this.userService.loginUser(validUser.value);
            return response;
        }
    }
}