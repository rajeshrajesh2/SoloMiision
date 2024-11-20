
import { Schema,Document, model, Types } from "mongoose";

interface IUser extends Document {
  id: string;
  username: string;
  email: string;
  password: string;
  profilePic: string;
  bio: string;
  skills: string[];
  completedGigs: string[];
  reviews:Types.ObjectId[];
  messages: Types.ObjectId[];
}
const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
    bio: { type: String, default: "" },
    skills: { type: [String], default: [] },
    completedGigs: { type: [String], default: [] },
    reviews: { type: [Types.ObjectId], default: [] },
    messages: { type: [Types.ObjectId], default: [] },
  },
);

const User = model<IUser>("User", userSchema);

export default User;

