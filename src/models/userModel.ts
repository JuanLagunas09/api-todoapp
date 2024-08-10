import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: "" },
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
