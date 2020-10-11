import express, { Application } from 'express';

const app: Application = express();
const PORT = 3001;

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));