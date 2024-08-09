import mongoose from "mongoose";

const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        throw new Error(error)
    }
}

export default connectMongoDb;