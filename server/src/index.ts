import express, { Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

const PORT: number = 5000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`));