import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://Harsh:e3q3Jppf4a92k4ne@cluster0.rfzqz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const userSchema = new mongoose.Schema({
  username: String,
  firstname: String,
  lastname: String,
  password: String,
});
const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

export { User, Account };
