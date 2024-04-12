import { Router } from "express";
import {Message}  from "../controllers/Message.js";

const router = Router();


router.post('/mess',Message);

export default router;