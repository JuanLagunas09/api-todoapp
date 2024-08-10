import User from "../models/userModel";
import boom from "@hapi/boom";

export class UserService {
  async index() {
    return await User.find();
  }

  async store(data: any) {
    const user = new User(data);
    await user.save();
    return user;
  }

  async show(id: string) {
    const user = await User.findById(id);
    if (!user) {
      throw boom.notFound("User not found");
    }
    return user;
  }

  async update(id: string, data: any) {
    return await User.findByIdAndUpdate(id, data, { new: true });
  }

  async destroy(id: string) {
    return await User.findByIdAndDelete(id);
  }
}
