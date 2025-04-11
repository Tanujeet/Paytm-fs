import express from express
const userRouter = require('./user')
const router = express.router


router.use("/user",userRouter)


module.exports=router