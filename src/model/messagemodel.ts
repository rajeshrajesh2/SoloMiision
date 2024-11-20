import { Schema,Document, model, Types } from "mongoose";
interface IMessage extends Document {
    sender: Types.ObjectId;
   message: string;
}
const messageSchema = new Schema({
   sender: { type: Types.ObjectId, ref: "User" },
   message: { type: String, required: true },
   });
const Message = model<IMessage>("Message", messageSchema);
export default Message;