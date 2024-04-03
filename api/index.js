import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Default route
app.get('/', (req, res) => res.send('Hello World!'));

// Start the server
const port = 3001;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
