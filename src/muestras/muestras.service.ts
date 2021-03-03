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

export const getMuestraById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const muestra: IMuestra | null = await Muestra.findById(req.params.id);
    res.status(200).json({ muestra });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const getMuestraByUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const muestra: IMuestra[] = await Muestra.find({
      user: parseInt(req.params.user),
    });
    res.status(200).json({ muestra });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const getMuestraWithAnomaly = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const muestrasWithAnomaly: IMuestra[] = await Muestra.find({
      anomaly: true,
    });
    res.status(200).json({ muestrasWithAnomaly });
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

export const updateMuestra = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updatedMuestra: IMuestra | null = await Muestra.findByIdAndUpdate(
      { _id: id },
      body
    );

    res.status(200).json({ muestra: updatedMuestra });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const deleteMuestra = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedMuestra: IMuestra | null = await Muestra.findByIdAndRemove(
      req.params.id
    );

    res.status(200).json({ muestra: deletedMuestra });
  } catch (e) {
    res.status(500).send(e.message);
  }
};
