import mongoose from "mongoose";

async function connectDB() {
    const uri = process.env.MONGO_URI;
    if (mongoose.connection[0].readyState) return;

    await mongoose.connect(uri)
    console.log("Connected to database");
}

export default connectDB;