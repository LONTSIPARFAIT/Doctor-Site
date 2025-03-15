import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js'; 
import adminRouter from './routes/doctorRoute.js';

// App config
const app = express();
const port = process.env.PORT || 5000;

// Connexion à la base de données et à Cloudinary
const startServer = async () => {
    try {
        await connectDB();    
        await connectCloudinary();
        console.log('Connected to MongoDB and Cloudinary');
    } catch (error) {
        console.error('Error connecting to services:', error);
        process.exit(1); // Arrêtez le serveur en cas d'erreur
    }
};

// Middlewares
app.use(express.json());
app.use(cors());

// API endpoints
app.use('/api/admin', adminRouter);

// Route de base
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

// Listener
startServer().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});