
import mongoose, { Schema } from "mongoose";
import type { BusinessType } from "./businesses.types.js";

const businessSchema = new Schema<BusinessType>(
    {
        name: { type: String, required: true },
        description: {
            type: String,
            minLength: 10,
            maxLength: [2000, "La descripción es demasiado larga."],
        },
        categoryId: { type: Number },
        address: { type: String },
        phone: { type: String },
        publicEmail: { type: String },
        website: { type: String },
        openingHours: { type: String },
        status: { type: String },
        ownerId: { type: Number },
    },
    {
        timestamps: true,
    }
);

export const Businesses = mongoose.model<BusinessType>(
    "businesses",
    businessSchema
);
