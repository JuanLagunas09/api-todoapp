import User from "../models/userModel";

export class UserService {
    async store(data: any) {
        const user = new User(data);
        await user.save();
        return user;
    }
} 