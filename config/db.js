const mongoose = require('mongoose');
require('dotenv').config(); 

const connectDB = async () => {
    try {
        
        const dbURI = 'mongodb://localhost:27017/Cleanease'; 
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); 
    }
};

module.exports = connectDB;
