// const mongoose = require('mongoose');

// // Hardcoded MongoDB URI
// const url = "mongodb://127.0.0.1:27017/gitapp";

// const db = async () => {
//     try {
//         mongoose.set('strictQuery', false);
//         await mongoose.connect(url, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('Db Connected');
//     } catch (error) {
//         console.error('DB Connection Error:', error.message);
//         process.exit(1); // Exit process with failure
//     }
// };

// // module.exports = { db};
// export { db };
import mongoose from 'mongoose';

// Replace with your MongoDB URI
const MONGO_URI = "mongodb://127.0.0.1:27017/gitapp";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Export the connectDB function and the mongoose instance as named exports
export { connectDB, mongoose };
