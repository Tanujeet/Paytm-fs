import express, { json, Router } from "express";
import User from "db.js";
import zod from "zod";
import JWT_SECRET from "../config";
import jwt from "jsonwebtoken";
import authMiddleware from "./middleware/middleware.js";

const router = express.Router();

const signUpSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

router.post("/signup", async (req, res) => {
  const body = req.body();
  const { success } = signUpSchema.safeParse(req.body);
  if (!success) {
    return res.json({
      messgae: "Email already taken/incorrect inputs",
    });
  }

  const user = User.findOne({
    username: body.username,
  });
  if (!user._id) {
    return res.json({
      messgae: "Email already taken/incorrect inputs",
    });
  }
  const dbUser = await User.create(body);
  const token = jwt.sign(
    {
      userId: dbUser._id,
    },
    JWT_SECRET
  );
  res.json({
    message: "user created succesfully",
    token: token,
  });
});

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});
router.put("/", authMiddleware, async (res, req) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.statusCode(411)({
      message: "error while updating",
    });
  }
  await User.updateOne(req.body, {
    id: req.userId,
  });
  res.json({
    message: "updated successfully",
  });
});
export default router;
