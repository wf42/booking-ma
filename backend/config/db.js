import mongoose from "mongoose";

export  const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://wf9334:Abdoaljabri99@cluster0.jim56.mongodb.net/booking-ma').then(()=>console.log("DB connected"))

}