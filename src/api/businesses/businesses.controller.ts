import { Request, Response } from "express";

type Business = {
    id: number;
    title: string;
    description: string;
    isPublic: boolean;
};

let businesses: Business[] = [];

// GET - Obtener todos los negocios
export const getAllBusinesses = (req: Request, res: Response) => {
    return res.json(businesses);
};

// GET - Obtener un negocio
export const getOneBusiness = (req: Request, res: Response) => {
    const id: Number = Number(req.params.id);
    const business: Business | undefined = businesses.find((business) => business.id === id);

    if (!business) {
        return res.status(404).json({
            message: "Negocio no encontrado",
        });
    }

    return res.json(business);
};

// POST - Crear un negocio
export const createBusiness = (req: Request, res: Response) => {
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
};

// PUT - Editar un negocio
export const updateBusiness = (req: Request, res: Response) => {
    const id: Number = Number(req.params.id);
    const business: Business | undefined = businesses.find((business) => business.id === id);

    if (!business) {
        return res.status(404).json({
            message: "Negocio no encontrado",
        });
    }

    Object.assign(business, req.body);
    res.json(business);
};

// DELETE - Eliminar un negocio
export const deleteBusiness = (req: Request, res: Response) => {
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
};
