import { Request, Response, Router } from "express";

export const BusinessesRouter: Router = Router();

type Business = {
    id: number,
    title: string,
    description: string,
    isPublic: boolean
}

let businesses: Business[] = [];

// GET /businesses
BusinessesRouter.get("/", (req: Request, res: Response) => {
    return res.json(businesses);
});

// GET /businesses/:id
BusinessesRouter.get("/:id", (req: Request, res: Response) => {
    const id: Number = Number(req.params.id);
	const business: Business | undefined = businesses.find((business) => business.id === id);

	if (!business) {
		return res.status(404).json({
			message: "Negocio no encontrado",
		});
	}

    return res.json(business);
})


// POST /businesses
BusinessesRouter.post("/", (req: Request, res: Response) => {
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

// PUT /businesses/:id
BusinessesRouter.put("/:id", (req: Request, res: Response) => {
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

// DELETE /businesses/:id
BusinessesRouter.delete("/:id", (req: Request, res: Response) => {
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