const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();
const chatRouter = require('./routes/chat');
const userRouter =  require('./routes/userRoutes');
const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Db connection successfully")
}).catch((err)=>{
    console.log(err);
})



app.use("/chats",chatRouter.router);
app.use("/api/user",userRouter.router);

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is Started ${process.env.PORT}`);
})