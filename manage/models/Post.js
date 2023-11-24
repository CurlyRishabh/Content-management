import mongoose from "mongoose";

const {Schema} = mongoose;

const postSchema = new Schema(
	{
		title: {
			type: String,
setti
			required: true
		},
		description: {
			type: String,

			required: true
		}
	}, {timestamps: true});

export default mongoose.models.Post ||  mongoose.model("Post", postSchema);
