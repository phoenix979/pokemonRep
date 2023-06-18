import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

export interface PokemonInstance extends Model {
    id: number;
    name: string;
}

export class Pokemon extends Model {}

Pokemon.init({
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
    modelName: 'pokemon'
});