import express from "express";
import { getSamples, addSample } from "../controllers/sampleController.js";

const router = express.Router();

router.get("/", getSamples);
router.post("/", addSample);

export default router;
