import express from 'express';
import { sequelize } from './config/config';
import pokemonRoute from './routes/pokemonRoute';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/pokemon', pokemonRoute);

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Unable to connect to the database:', error);
    });