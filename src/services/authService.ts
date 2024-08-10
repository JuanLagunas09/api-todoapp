import User from "../models/userModel";
import boom from "@hapi/boom";
import jwt from "jsonwebtoken";
import { config } from "../config/config";
import bycrypt from "bcrypt";
import { UserService } from "./userService";

export class AuthService {
  private userService!: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async signin(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) {
      throw boom.unauthorized("Email or password is incorrect");
    }

    const comparePassword = await bycrypt.compare(password, user.password);

    if (!comparePassword) {
      throw boom.unauthorized("Password is incorrect");
    }

    const token = jwt.sign({ sub: user._id }, config.SECRET_KEY!);

    return token;
  }

  async signup(userData: any) {
    const { password } = userData;
    const passwordHash = await bycrypt.hash(password, 10);
    const user = await this.userService.store({ ...userData, password: passwordHash });

    return user;
  }
}
