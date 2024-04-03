import express from "express";
import { test } from '../controllers/user.controller.js';

// Create a router instance
const router = express.Router();

// Define routes
router.get('/test', test);
// Export the router
export default router;
