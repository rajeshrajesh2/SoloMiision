

import { Schema,Document, model, Types } from "mongoose";


export interface IGig extends Document {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    deliveryTime: string;
    image: string;
    seller: Types.ObjectId;
    reviews: Types.ObjectId[];
    createdAt: Date;
    endDate: Date;
}
const gigSchema = new Schema<IGig>({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    deliveryTime: { type: String, required: true },
    image: { type: String, required: true },
    seller: { type: Schema.Types.ObjectId, ref: "User", required: true },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    createdAt: { type: Date, default: Date.now },
    endDate: { type: Date, required: true },
});

export const Gig = model<IGig>("Gig", gigSchema);