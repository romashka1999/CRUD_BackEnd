import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const dataBase = new Sequelize({
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        dialect: 'postgres',
        logging: false,
});

dataBase.sync({ force: false});