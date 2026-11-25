import { Request, Response, Router } from "express";
import { createBusiness, deleteBusiness, getAllBusinesses, getOneBusiness, updateBusiness } from "../businesses/businesses.controller.js";

export const BusinessesRouter: Router = Router();

type Business = {
    id: number,
    title: string,
    description: string,
    isPublic: boolean
}

let businesses: Business[] = [];

// GET /businesses
BusinessesRouter.get("/", getAllBusinesses);

// GET /businesses/:id
BusinessesRouter.get("/:id", getOneBusiness);

// POST /businesses
BusinessesRouter.post("/", createBusiness);

// PUT /businesses/:id
BusinessesRouter.put("/:id", updateBusiness);

// DELETE /businesses/:id
BusinessesRouter.delete("/:id", deleteBusiness);