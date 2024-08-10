import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/userService";

const userService = new UserService();

export const store = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    const user = await userService.store(data);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}