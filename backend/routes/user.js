import express, { json } from "express";
import User from "db.js";
import zod from "zod";
import JWT_SECRET from "../config";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/", (req, res) => {});
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
export default router;
