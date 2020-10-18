import mongoose from "mongoose";
import { DatabaseConnectionError } from '../errors/databaseConnectionError';

const connectDB = async () => {
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
};

export default connectDB;



