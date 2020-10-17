import mongoose from "mongoose";
import dotenv from 'dotenv';
import { app } from './app';
import { DatabaseConnectionError } from './errors/database-connection-error';

dotenv.config();

const start = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (err) {
    throw new DatabaseConnectionError();
  };

  app.listen(process.env.PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${process.env.PORT}`));
};

// 🚀
start();