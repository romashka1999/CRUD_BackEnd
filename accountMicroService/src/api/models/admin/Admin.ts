import { DataTypes, Model } from 'sequelize';
import { dataBase } from '../../database/database';

class Admin extends Model { }

Admin.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.TEXT,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        tableName: "admins",
        sequelize: dataBase,
        timestamps: false
    }
);


export default Admin;