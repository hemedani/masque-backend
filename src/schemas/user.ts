import { model, Schema } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface User {
  name: string;
  email: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

// 3. Create a Model.
export const UserModel = model<User>("User", schema);
