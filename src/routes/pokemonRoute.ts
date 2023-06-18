import express from 'express';
import { Pokemon, PokemonInstance } from '../models/pokemon';
import { Property, PropertyInstance } from '../models/property';
import { PokemonProperty } from '../models/pokemonProperty';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name, ...properties } = req.body;
        
        // Create Pokemon
        const pokemon = await Pokemon.create({ name }) as PokemonInstance;

        // Create or update properties
        for (const propName in properties) {
            const propValue = properties[propName];
            const [property] = await Property.findOrCreate({ where: { name: propName } });
            const propertyInstance = property as PropertyInstance;
            await PokemonProperty.create({ pokemonId: pokemon.id, propertyId: propertyInstance.id, score: propValue });
        }

        res.status(201).json({ message: 'Pokemon created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;