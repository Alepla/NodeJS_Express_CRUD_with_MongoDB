import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import muestrasRouter from "./muestras/muestras.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

dotenv.config();

if (!process.env.PORT) process.exit(1);

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api", muestrasRouter);

app.use(errorHandler);
app.use(notFoundHandler);

const uri: string = `mongodb://127.0.0.1:27017/${process.env.MONGO_DB}`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.set("useFindAndModify", false);
mongoose
  .connect(uri, options)
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
  .catch((e) => console.log("MongoDB connection error: " + e));
