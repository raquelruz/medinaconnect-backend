import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new Schema(
    {
        username: {
            type: String,
            required: [true, "El nombre de usuario es obligatorio."],
            unique: true,
            index: true,
            trim: true,
        },
        name: { type: String },
        email: {
            type: String,
            required: true,
            lowercase: true,
        },
        password: {
            type: String,
            select: false,
        },
        role: { 
            type: String,
            enum: ["admin", "user", "guest"],
            default: "guest"
        },
    },
    {
        timestamps: true,
    }
);

export const Users = mongoose.model("/users", userSchema);
