import { Router } from "express";
import {
  getMuestras,
  addMuestra,
  updateMuestra,
  deleteMuestra,
  getMuestraById,
  getMuestraByUser,
  getMuestraWithAnomaly,
} from "./muestras.service";

const router: Router = Router();

router.get("/muestras", getMuestras);
router.get("/muestraById/:id", getMuestraById);
router.get("/muestraByUser/:user", getMuestraByUser);
router.get("/muestrasWithAnomaly", getMuestraWithAnomaly);
router.post("/add-muestra", addMuestra);
router.put("/update-muestra/:id", updateMuestra);
router.delete("/delete-muestra/:id", deleteMuestra);

export default router;
