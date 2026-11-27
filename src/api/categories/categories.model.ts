import mongoose, { Schema } from "mongoose";
import type { CategoryType } from "./categories.types.js";

const categorySchema: Schema = new Schema<CategoryType>({
    name: { type: String, required: true },
    description: { type: String },
    slug: { type: String },
    image: { type: String },
    status: { 
        type: String,
        enum: ["active", "inactive"],
        required: true
    },
});


export const Categories = mongoose.model<CategoryType>("categories", categorySchema);