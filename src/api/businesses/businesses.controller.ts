import { Request, Response } from "express";
import { Businesses } from "./businesses.model.js";

// GET - Obtener todos los negocios
export const getAllBusinesses = async (req: Request, res: Response) => {
    try {
        const businesses = await Businesses.find();
        return res.json(businesses);
    } catch (error) {
        return res.status(500).json({ error: "Error al obtener los negocios", message: (error as Error).message });
    }
};

// GET - Obtener un negocio
export const getOneBusiness = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const business = await Businesses.findById(id);

        if (!business) {
            return res.status(404).json({
                message: "Negocio no encontrado",
            });
        }

        return res.json(business);
    } catch (error) {
        return res.status(500).json({ error: "Error al obtener el negocio", message: (error as Error).message });
    }
};

// POST - Crear un negocio
export const createBusiness = async (req: Request, res: Response) => {
    try {
        const newBusiness = await Businesses.create(req.body);
        return res.status(201).json(newBusiness);
    } catch (error) {
        return res.status(500).json({ error: "Error al crear el negocio", message: (error as Error).message });
    }
};

// PUT - Editar un negocio
export const updateBusiness = async (req: Request, res: Response) => {
    try {
    const { id } = req.params;
    const business = await Businesses.findByIdAndUpdate(id);

    if (!business) {
        return res.status(404).json({
            message: "Negocio no encontrado",
        });
    }

    return res.json(business);
} catch (error) {
    return res.status(500).json({ error: "Error al editar el negocio", message: (error as Error).message })
}
};

// DELETE - Eliminar un negocio
export const deleteBusiness = async (req: Request, res: Response) => {
    try {
    const { id } = req.params;
    const business = await Businesses.findByIdAndDelete(id);

    if (!business) {
        return res.status(404).json({ message: "Negocio no encontrado " });
    }

    return res.json({ success: true, business })
} catch (error) {
    return res.status(500).json({ error: "Error al eliminar el negocio", message: (error as Error).message });
}
};
