import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import serviceRouter from "./routes/serviceroute.js"
import userRouter from "./routes/userroute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartroute.js"


// app config
const app = express()
const port = 4000

// midlleware
app.use(express.json())
app.use(cors())

// DB connection
connectDB();

// api endpoint
app.use("/api/service",serviceRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

// mongodb+srv://wf9334:Abdoaljabri99@cluster0.jim56.mongodb.net/?