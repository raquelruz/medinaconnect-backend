import { Router } from "express";
import { createCategory, deleteCategory, getAllCategories, getOneCategory, updateCategory } from "./categories.controller.js";

export const CategoriesRoutes: Router = Router();

// GET /categories
CategoriesRoutes.get("/", getAllCategories);

// GET /categories/:id
CategoriesRoutes.get("/:id", getOneCategory);

// POST /categories
CategoriesRoutes.post("/", createCategory);

// PUT /categories/:id
CategoriesRoutes.put("/:id", updateCategory);

// DELETE /categories/:id
CategoriesRoutes.delete("/:id", deleteCategory);