import { Document } from "mongoose";

export interface IMuestra extends Document {
  date: string;
  heartStatus: number;
  pulse: number;
  hasECG: boolean;
  anomaly: boolean;
  user: number;
}
