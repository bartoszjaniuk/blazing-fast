import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
	res.json({
		message: "Auth routes are working",
		success: true,
	});
});

export default router;
