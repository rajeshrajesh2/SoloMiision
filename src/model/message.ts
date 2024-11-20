
import mongoose, { Schema,Document, model, Types } from "mongoose";

interface IMessage extends Document {
  sender: Types.ObjectId;
  receiver: Types.ObjectId;
  message: string;
  sendAt: Date;

}
const MessageSchema = new Schema<IMessage>(
    {
    sender: { type: Schema.Types.ObjectId, ref: "User" },
    receiver: { type: Schema.Types.ObjectId, ref: "User" },
    message: { type: String, required: true },
    sendAt: { type: Date, default: Date.now }
  },
  {
    timestamps: true,
  }
);

const MessageModel = model<IMessage>("Message", MessageSchema);

export default MessageModel;

