import { Router } from "express";
import {
  getMuestras,
  addMuestra,
  updateMuestra,
  deleteMuestra,
} from "./muestras.service";

const router: Router = Router();

router.get("/muestras", getMuestras);
router.post("/add-muestra", addMuestra);
router.put("/update-muestra/:id", updateMuestra);
router.delete("/delete-muestra/:id", deleteMuestra);

export default router;
