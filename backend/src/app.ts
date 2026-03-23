import express, { Router } from "express";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import messageRoutes from "./routes/messageRoutes";
import chatRoutes from "./routes/chatRoutes";
import { clerkMiddleware } from "@clerk/express";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());

app.use(clerkMiddleware());

app.get("/health", (req, res) => {
	res.json({
		message: "Server is running",
		success: true,
	});
});

const apiV1 = Router();
apiV1.use("/auth", authRoutes);
apiV1.use("/users", userRoutes);
apiV1.use("/messages", messageRoutes);
apiV1.use("/chats", chatRoutes);

app.use("/api/v1", apiV1);

app.use(errorHandler);

export default app;
