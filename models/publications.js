import mongoose , {mongo, Schema} from "mongoose";

const publicationSchema = new Schema(
    {
        title: String,
        description: String,
        url: String,
        datePublished: Date,
        isShown: Boolean,
    }
);

const Publication = mongoose.models.Publication || mongoose.model("Publication", publicationSchema);

export default Publication;