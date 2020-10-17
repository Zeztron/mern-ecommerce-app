import express, { Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

app.listen(process.env.PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${process.env.PORT}`));