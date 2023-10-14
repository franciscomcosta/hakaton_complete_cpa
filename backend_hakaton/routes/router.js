import express from 'express';
import { Methods } from '../controllers/methods.js';


const router = express.Router()


router.get("/login", Methods.login)
router.post("/cadUser", Methods.cadUser)

export default router;