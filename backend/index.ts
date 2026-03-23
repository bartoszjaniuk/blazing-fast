import app from "./src/app";
import { connectDB } from "./src/config/database";

const PORT = process.env.PORT || 2137;
const NODE_ENV = process.env.NODE_ENV || "development";

connectDB()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT} in ${NODE_ENV} mode`);
		});
	})
	.catch((error) => {
		console.error("Error starting server:", error);
		process.exit(1);
	});
