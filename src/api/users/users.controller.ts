import { Request, Response } from "express";

export const getRegister = (req: Request, res: Response) => {
    return res.json("Ruta REGISTER funcionando");
};

export const getLogin = (req: Request, res: Response) => {
    return res.json({ message: "Ruta LOGIN funcionando" });
};