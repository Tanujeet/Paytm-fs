import express from "express";
import User from "db.js";
import zod, { string } from "zod";

const router = express.Router();

router.get("/", (req, res) => {});
const signUpSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});
router.post("/signup", (req, res) => {
  const body = req.body();
  const { success } = signUpSchema.safeParse(req.body);
  if (!success) {
    return res.json({
      messgae: "Email already taken/incorrect inputs",
    });
  }
});
export default router;
