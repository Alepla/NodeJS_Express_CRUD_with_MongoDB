import { Router } from "express";
import { getMuestras, addMuestra } from "./muestras.service";

const router: Router = Router();

router.get("/muestras", getMuestras);
router.post("/add-muestra", addMuestra);

export default router;
