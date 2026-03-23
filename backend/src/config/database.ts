import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const dbUri = process.env.MONGODB_URI;
		if (!dbUri) throw new Error("MONGODB_URI is not defined");
		await mongoose.connect(dbUri);
		console.log("MongoDB connected successfully");
	} catch (error) {
		console.error("MongoDB connection error:", error);
		process.exit(1); // exit with failure
	}
};
