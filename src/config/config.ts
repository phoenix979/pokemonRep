import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('dbtest', 'bjorka', 'pass', {
    host: 'localhost',
    dialect: 'postgres',
    port: 54320
});