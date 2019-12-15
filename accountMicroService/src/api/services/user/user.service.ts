import { UserRepository } from '../../repositories';


export default class UserService {

    private userRepository: UserRepository;

    public constructor(){
        this.userRepository = new UserRepository();
    }

    public async createUser(user: any) {
        try {
            const email = await this.userRepository.getUserByWhere({email: user.email});
            if( email !== null ) {
                throw({type: "User_SERVICE_ERROR", statusCode: 400, message: 'Email already exists'});
            }
        } catch (error) {
            throw(error);
        }
        try {
            const userName = await this.userRepository.getUserByWhere({username: user.username});
            if( userName !== null ) {
                throw({type: "User_SERVICE_ERROR", statusCode: 400, message: 'Username already exists'});
            }
        } catch (error) {
            throw(error);
        }
        const createdUser = await this.userRepository.createUser(user);
        return createdUser;
    }

    public async getAllUsers() {
        const users = await this.userRepository.getAllUsers();
        return users;
    }

    public async getUserById(id: number) {
        const user = await this.userRepository.getUserByWhere({id: id});
        return user;
    }

    public async deleteUserById(id: number) {
        const user = await this.userRepository.deleteUserById(id);
        return user;
    }

    public async updateUserById(newUserBody: any, id: number) {
        const user = await this.userRepository.updateUserById(newUserBody, id);
        return user;
    }

    public async loginUser(body: any) {
        const usernameWhere = { username: body.emailOrUsername, password: body.password};
        const user = await this.userRepository.getUserByWhere(usernameWhere);
        if( user != null ) {
            return user;
        } else {
            const emailWhere = { email: body.emailOrUsername,  password: body.password};
            const user = await this.userRepository.getUserByWhere(emailWhere);
            if( user != null ) {
                return user;
            } else {
                throw({type: "User_SERVICE_ERROR", statusCode: 400, message: 'Username/Email Or Password is not correct'});
            }
        }
    }
}