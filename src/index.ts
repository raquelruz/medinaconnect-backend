import express, { Application, Request, Response } from "express";
import cors from "cors";
import 'dotenv/config';
import { BusinessesRouter } from "./api/businesses/businesses.routes.js";

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3000;

app.use(express.json());

app.use(cors());

app.get("/", (req: Request, res: Response) => {
	return res.json({ message: "Servidor funcionando correctamente" });
});

app.use("/businesses", BusinessesRouter);

app.listen(PORT, () => {
	console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
