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

export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await userService.show(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

export const index = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.index();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const user = await userService.update(id, data);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

export const destroy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await userService.destroy(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
}