import mongoose from "mongoose";
import db from "../../config/db.js";
import { Users } from "./users.model.js";
import { UsersType } from "./users.types.js";

const usersData: Partial<UsersType>[] = [
    {
        username: "admin.medinaconnect",
        name: "Raquel Ruiz",
        email: "admin@medinaconnect.com",
        password: "123456a",
        role: "admin",
    },
    {
        username: "user",
        name: "Usuario de prueba",
        email: "user@medinaconnect.com",
        password: "123456a",
        role: "user",
    },
    {
        username: "invitado",
        name: "Invitado de prueba",
        email: "guest@medinaconnect.com",
        password: "123456a",
        role: "guest",
    },
];


mongoose
    .connect(db.DB_URL)
    .then(async () => {
        const allUsers = await Users.find();

        if (allUsers.length) {
            console.log("Deleting users collection...");
            await Users.collection.drop();
        } else {
            console.log("No existing users found, creating users...");
        }
    })
        .catch((error: unknown) => console.log("There was an error when deleting users.", error))
        .then(async () => {
            await Users.insertMany(usersData);
            console.log("Users added successfully!");
        })
        .catch((error: unknown) => console.log("Error adding users to database", error))
        .finally(() => mongoose.disconnect());
    