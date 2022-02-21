import express from 'express';
import { getInfo, geDirettivo, getText, getEvents } from '../controller/home.js'

const router = express.Router();

router.get('/info', getInfo);
router.get('/direttivo', geDirettivo);
router.get('/text', getText);
router.get('/events', getEvents);

export default router;