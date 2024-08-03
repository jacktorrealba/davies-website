import mongoose from "mongoose";

const connectMongoDb = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to mongo!")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDb;