import  { User } from '../../models';
import { IUserRepository } from '../Irepositories'

export default class UserRepository implements IUserRepository {

    public async getAllUsers() {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            throw({type: "User_REPOSITORY_ERROR", statusCode: 400, message: error});
        }
    }

    public async getUserByWhere(where: any) {
        try {
            const user = await User.findOne({where: where});
            return user;
        } catch (error) {
            throw({type: "User_REPOSITORY_ERROR", statusCode: 400, message: error});
        }
    }
    
    public async createUser(user: User) {
        try {
            const createdUser = await User.create(user);
            return createdUser;
        } catch (error) {
            throw({type: "User_REPOSITORY_ERROR", statusCode: 400, message: error});
        }
    }

    public async deleteUserById(id: number) {
        try {
            const deletedUser = await User.destroy({where: {id: id}});
            if(deletedUser === 0) {
                throw('User doest not exist');
            }
            if(deletedUser === 1) {
                return 'User Successfully deleted';
            }
        } catch (error) {
            throw({type: "User_REPOSITORY_ERROR", statusCode: 400, message: error});
        }
    }

    public async updateUserById(updatedBody: any, id: number) {
        try {
            const updatedUser = await User.update(updatedBody,{where: {id: id}});
            if(!updatedUser[0]) {
                throw('User does not exist');
            } else {
                return 'User successfully updated';
            }
        } catch (error) {
            throw({type: "User_REPOSITORY_ERROR", statusCode: 400, message: error});
        }
    }

}