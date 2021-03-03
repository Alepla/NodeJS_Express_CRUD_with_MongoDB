import { IMuestra } from "./muestras.interface";
import { model, Schema } from "mongoose";

const muestraSchema: Schema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },

    heartStatus: {
      type: Number,
      required: true,
    },

    pulse: {
      type: Number,
      required: true,
    },

    hasECG: {
      type: Boolean,
      required: true,
    },

    anomaly: {
      type: Boolean,
      required: true,
    },

    user: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IMuestra>("samples", muestraSchema);
