import type { AuthRequest } from "../middleware/auth";
import { User } from "../models/User";
import type { NextFunction, Request, Response } from "express";

export async function getUsers(
	req: AuthRequest,
	res: Response,
	next: NextFunction,
) {
	try {
		const userId = req.userId;
		const users = await User.find({ _id: { $ne: userId } }).select(
			"name email avatar",
		);
		res.json(users);
	} catch (error) {
		res.status(500);
		next(error);
	}
}
