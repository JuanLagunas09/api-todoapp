import taskModel from "../models/taskModel";
/* import boom from "@hapi/boom"; */

export class TaskService {
    async index() {
        return await taskModel.find();
    }

    async store(data: any) {
        const task = new taskModel(data);
        await task.save();

        return task;
    }
}