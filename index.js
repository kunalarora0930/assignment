import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./mongoDB/connect.js";
//import api route---------------------------------------------
import productRoutes from './routes/productRoutes.js';

dotenv.config();

// Create an instance of Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


//api routes
app.use('/api/products', productRoutes);


// Define your routes
app.get('/', (req, res) => {
    res.send('Welcome to e-Commerce store backend!');
});


// Start the server
const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server has started on port http://localhost:${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();