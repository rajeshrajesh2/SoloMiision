import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables
console.log("Mongo URI:", process.env.MONGO_URI);


const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI; // Access the URI from .env
    if (!uri) {
      throw new Error('MONGO_URI is not defined in the environment variables');
    }
    await mongoose.connect(uri);
    console.log('MongoDB Connected');
  } catch (error) {
    console.log("Mongo URI:", process.env.MONGO_URI);
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
