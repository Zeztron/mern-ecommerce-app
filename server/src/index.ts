import express, { Application } from 'express';

const app: Application = express();
const PORT = 5000;

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));