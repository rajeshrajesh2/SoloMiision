
import mongoose, { Schema,Document, model, Types } from "mongoose";

interface IMessage extends Document {
  id: Types.ObjectId;
  sender: Types.ObjectId;
  receiver: Types.ObjectId;
  message: string;
  sendAt: Date;

}
const MessageSchema = new Schema<IMessage>(
    {
      id: { type: Schema.Types.ObjectId, required: true, auto: true },
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

