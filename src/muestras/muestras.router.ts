import { Router } from "express";
import { getMuestras } from "./muestras.service";

const router: Router = Router();

router.get("/muestras", getMuestras);

export default router;
