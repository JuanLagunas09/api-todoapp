import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/authService";

const authService = new AuthService();

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const token = await authService.signin(email, password);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};


export const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await authService.signup(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
}