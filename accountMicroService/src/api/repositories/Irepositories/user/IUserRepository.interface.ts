import { User } from '../../../models';

export default interface IUserRepository {
    getAllUsers(): any;
    getUserByWhere(where: any): any;
    createUser(user: User): any;
    deleteUserById(id: number): any;
    updateUserById(updatedBody: any, id: number): any;
}