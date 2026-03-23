import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
	res.json({
		message: "User routes are working",
		success: true,
	});
});

export default router;
