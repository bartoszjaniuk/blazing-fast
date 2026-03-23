import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
	res.json({
		message: "Chat routes are working",
		success: true,
	});
});

export default router;
