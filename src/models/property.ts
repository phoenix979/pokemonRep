import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

export interface PropertyInstance extends Model {
    id: number;
    name: string;
}

export class Property extends Model {}

Property.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'property'
});