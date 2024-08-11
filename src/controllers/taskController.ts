import { Request, Response, NextFunction } from "express";
import { TaskService } from "../services/taskService";

const taskService = new TaskService();

export const store = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const idUser = req.user?.sub;
    data.user = idUser;
    const result = await taskService.store(data);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
