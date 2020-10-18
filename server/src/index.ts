import dotenv from 'dotenv';
import { app } from './app';
import connectDB from './config/db';

dotenv.config();

const start = async () => {
  connectDB();

  app.listen(process.env.PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${process.env.PORT}`));
};

// 🚀
start();