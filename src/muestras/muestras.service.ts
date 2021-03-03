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

export const addMuestra = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const body = req.body as Pick<
      IMuestra,
      "date" | "heartStatus" | "pulse" | "hasECG" | "anomaly" | "user"
    >;

    const muestra: IMuestra = new Muestra({
      date: body.date,
      heartStatus: body.heartStatus,
      pulse: body.pulse,
      hasECG: body.hasECG,
      anomaly: body.anomaly,
      user: body.user,
    });

    const newMuestra: IMuestra = await muestra.save();

    res.status(201).json({ muestra: newMuestra });
  } catch (e) {
    res.status(500).send(e.message);
  }
};
