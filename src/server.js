import { resolve } from 'path';
import express from 'express';

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(resolve(__dirname, 'public')));

app.listen(3333, () => console.log('Ouvindo na porta 3333'));
