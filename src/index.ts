import express, { Application, Request, Response } from "express";
import cors from "cors";
import 'dotenv/config';

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3000;

type Business = {
    id: number,
    title: string,
    description: string,
    isPublic: boolean
}

let businesses: Business[] = [];

app.use(express.json());

app.use(cors());

app.get("/", (req: Request, res: Response) => {
	return res.json({ message: "Servidor funcionando correctamente" });
});

app.get("/businesses", (req: Request, res: Response) => {
	return res.json(businesses);
});

app.post("/businesses", (req: Request, res: Response) => {
	console.log(req.body);

	if (!req.body.title) {
		return res.status(400).json("El campo title es obligatorio");
	}

	const newBusiness: Business = {
		id: Date.now(),
		...req.body,
	};

	businesses.push(newBusiness);
	return res.status(201).json(businesses);
});

app.put("/businesses/:id", (req: Request, res: Response) => {
	const id: Number = Number(req.params.id);
	const business: Business | undefined = businesses.find((business) => business.id === id);

	if (!business) {
		return res.status(404).json({
			message: "Negocio no encontrado",
		});
	}

	Object.assign(business, req.body);
    res.json(business)
});

app.delete("/businesses/:id", (req, res) => {
	const id: Number = Number(req.params.id);
	const business: Business | undefined = businesses.find((business) => business.id === id);

	if (!business) {
		return res.status(404).json({ message: "Negocio no encontrado " });
	}

	businesses = businesses.filter((b) => b.id !== id);
    res.json(business);

	return res.status(200).json({
		message: "Negocio eliminado correctamente",
	});
});

app.listen(PORT, () => {
	console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
