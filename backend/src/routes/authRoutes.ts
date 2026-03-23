import { Router } from "express";
import { getMe, postAuthCallback } from "../controllers/authController";
import { protectRoute } from "../middleware/auth";

const router = Router();

router.get("/health", (req, res) => {
	res.json({
		message: "Auth routes are working",
		success: true,
	});
});

router.get("/me", protectRoute, getMe);
router.post("/callback", postAuthCallback);

export default router;
