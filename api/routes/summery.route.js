import express from 'express'
import { summery } from '../controllers/summery.js';
const router = express.Router();
router.get('/summery', summery);
export default router;