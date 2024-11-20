
import { Schema,Document, model, Types } from "mongoose";

interface IOrder extends Document {
    id:String
    gig:Types.ObjectId;
    buyer:Types.ObjectId;
    seller:Types.ObjectId;
    amount:Number;
    endDate:Date;
    createdAt:Date;
}
const OrderSchema = new Schema<IOrder>({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    gig: {
        type: Schema.Types.ObjectId,
        ref: "Gig",
        required: true,
    },
    buyer: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const Order = model<IOrder>("Order", OrderSchema);
export default Order;