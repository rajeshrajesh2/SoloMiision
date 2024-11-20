
import { Schema,Document, model, Types } from "mongoose";

interface IReview extends Document{
    id:String;
    gig:Types.ObjectId;
    buyer:Types.ObjectId;
    seller:Types.ObjectId;
    rating:Number;
    comment:String;
    createdAt:Date;
}
const reviewSchema:Schema = new Schema({
    id: {type: String, required: true},
    gig: {type: Schema.Types.ObjectId, ref: "Gig", required: true},
    buyer: {type: Schema.Types.ObjectId, ref: "User", required: true},
    seller: {type: Schema.Types.ObjectId, ref: "User", required: true},
    rating: {type: Number, required: true},
    comment: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});
const Review = model<IReview>("Review", reviewSchema);

export default Review;