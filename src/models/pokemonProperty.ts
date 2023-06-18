import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

export class PokemonProperty extends Model {}

PokemonProperty.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pokemonId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    propertyId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'pokemonProperty'
});