import mongoose, { Schema } from "mongoose";
import { BusinessType } from "./businesses.types.js";


const businessSchema: Schema<BusinessType> = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, minLength: 10, maxLength: [2000, "La descripción es demasiado larga."] },
        categoryId: { type: Number },
        address: { type: String },
        phone: { type: Number },
        publicEmail: { type: String },
        website: { type: String },
        openingHours: { type: Date },
        status: { type: String },
        ownerId: { type: Number }
    },
    {
        timestamps: true,
    }
);

export const Businesses = mongoose.model<BusinessType>("businesses", businessSchema);
