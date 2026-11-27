import { Request, Response } from "express";
import { Categories } from "./categories.model.js";

// GET - Obtener todas las categorías
export const getAllCategories = async (req: Request, res: Response) => {
    try {
        const categories = await Categories.find();
        return res.json(categories);
    } catch (error) {
        return res.status(500).json({ error: "Error al obtener las categorías", message: (error as Error).message });
    }
};

// GET - Obtener una categoría
export const getOneCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const category = await Categories.findById(id);

        if (!category) {
            return res.status(404).json({
                message: "Categoría no encontrada",
            });
        }

        return res.json(category);
    } catch (error) {
        return res.status(500).json({ error: "Error al obtener la categoría", message: (error as Error).message });
    }
};

// POST - Crear una categoría
export const createCategory = async (req: Request, res: Response) => {
    try {
        const newCategory = await Categories.create(req.body);
        return res.status(201).json(newCategory);
    } catch (error) {
        return res.status(500).json({ error: "Error al crear la categoría", message: (error as Error).message });
    }
};

// PUT - Editar una categoría
export const updateCategory = async (req: Request, res: Response) => {
    try {
    const { id } = req.params;
    const category = await Categories.findByIdAndUpdate(id);

    if (!category) {
        return res.status(404).json({
            message: "Categoría no encontrada",
        });
    }

    return res.json(category);
} catch (error) {
    return res.status(500).json({ error: "Error al editar la categoría", message: (error as Error).message })
}
};

// DELETE - Eliminar una categoría
export const deleteCategory = async (req: Request, res: Response) => {
    try {
    const { id } = req.params;
    const category = await Categories.findByIdAndDelete(id);

    if (!category) {
        return res.status(404).json({ message: "Categoría no encontrada" });
    }

    return res.json({ success: true, category })
} catch (error) {
    return res.status(500).json({ error: "Error al eliminar la categoría", message: (error as Error).message });
}
};
