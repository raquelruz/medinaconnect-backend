import { Router } from "express";
import { getLogin, getRegister } from "./users.controller.js";

export const userRoutes: Router = Router();

userRoutes.get("/register", getRegister);

userRoutes.get("/login", getLogin);