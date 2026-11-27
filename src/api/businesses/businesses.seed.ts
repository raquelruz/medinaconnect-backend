import mongoose from "mongoose";
import db from "../../config/db.js";
import { Businesses } from "./businesses.model.js";
import type { BusinessType } from "./businesses.types.js";

const seedData: Partial<BusinessType>[] = [
    {
        name: "Panadería MariSol",
        description:
            "Panadería artesanal especializada en pan tradicional, bollería recién hecha y dulces típicos de la zona.",
        categoryId: 1,
        address: "Calle Real, 24, Medina-Sidonia, Cádiz",
        phone: "956410235",
        publicEmail: "contacto@panaderiamarisol.es",
        website: "https://www.panaderiamarisol.es",
        openingHours: "L-V 9:00-14:00",
        status: "active",
        ownerId: 1,
    },
    {
        name: "Restaurante La Plaza",
        description:
            "Restaurante familiar que ofrece gastronomía tradicional gaditana, tapas caseras y productos locales en un ambiente acogedor.",
        categoryId: 2,
        address: "Plaza de España, 8, Medina-Sidonia, Cádiz",
        phone: "956412678",
        publicEmail: "reservas@restaurantelaplaza.es",
        website: "https://www.restaurantelaplaza.es",
        openingHours: "L-S 12:00-00:00",
        status: "active",
        ownerId: 2,
    },
    {
        name: "Floristería Azahar",
        description:
            "Floristería especializada en arreglos florales personalizados, plantas ornamentales y decoración para bodas y eventos.",
        categoryId: 3,
        address: "Calle San Juan, 15, Medina-Sidonia, Cádiz",
        phone: "956413890",
        publicEmail: "info@floristeriaazahar.es",
        website: "https://www.floristeriaazahar.es",
        openingHours: "L-D 9:00-13:00",
        status: "active",
        ownerId: 3,
    },
];

mongoose
    .connect(db.DB_URL)
    .then(async () => {
        const allBusinesses = await Businesses.find();

        if (allBusinesses.length) {
            console.log("Deleting businesses collection...");
            await Businesses.collection.drop();
        } else {
            console.log("No existing businesses found, creating businesses...");
        }
    })
    .catch((error: unknown) => console.log("There was an error when deleting businesses.", error))
    .then(async () => {
        await Businesses.insertMany(seedData);
        console.log("Businesses added successfully!");
    })
    .catch((error: unknown) => console.log("Error adding businesses to database", error))
    .finally(() => mongoose.disconnect());
