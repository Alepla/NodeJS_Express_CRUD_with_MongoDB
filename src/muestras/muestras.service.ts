import { Response, Request } from "express";

import { IMuestra } from "./muestras.interface";
import Muestra from "./muestras.model";

export const getMuestras = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const muestras: IMuestra[] = await Muestra.find();
    res.status(200).json({ muestras });
  } catch (e) {
    res.status(500).send(e.message);
  }
};
