import mongoose from "mongoose";
import db from "../../config/db.js";
import { Categories } from "./categories.model.js";
import type { CategoryType } from "./categories.types.js";

const categoriesData: Partial<CategoryType>[] = [
    {
        name: "Alimentación",
        description: "Tiendas de alimentación, panaderías, carnicerías y establecimientos de productos locales.",
        slug: "alimentacion",
        image: "",
        status: "active",
    },
    {
        name: "Restauración",
        description: "Restaurantes, bares, cafeterías y establecimientos de comida.",
        slug: "restauracion",
        image: "",
        status: "active",
    },
    {
        name: "Moda",
        description: "Tiendas de ropa, calzado, complementos y accesorios.",
        slug: "moda",
        image: "",
        status: "active",
    },
    {
        name: "Belleza y bienestar",
        description: "Peluquerías, centros de estética, barberías y servicios de bienestar.",
        slug: "belleza-bienestar",
        image: "",
        status: "active",
    },
    {
        name: "Servicios",
        description: "Profesionales y negocios que ofrecen servicios a particulares y empresas.",
        slug: "servicios",
        image: "",
        status: "active",
    },
];

mongoose
    .connect(db.DB_URL)
    .then(async () => {
        const allCategories = await Categories.find();

        if (allCategories.length) {
            console.log("Deleting categories collection...");
            await Categories.collection.drop();
        } else {
            console.log("No existing categories found, creating categories...");
        }
    })
    .catch((error: unknown) => console.log("There was an error when deleting categories.", error))
    .then(async () => {
        await Categories.insertMany(categoriesData);
        console.log("Categories added successfully!");
    })
    .catch((error: unknown) => console.log("Error adding categories to database", error))
    .finally(() => mongoose.disconnect());
