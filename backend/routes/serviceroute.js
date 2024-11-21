import express from "express"
import { addservice,listService,removeService } from "../controllers/servicecontrollers.js"
import multer from "multer"

const serviceRouter = express.Router();

// image storage engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null ,`${Date.now()}${file.originalname}`)
    }
})
const upload = multer({storage:storage})

serviceRouter.post("/add",upload.single("image"),addservice)
serviceRouter.get("/list",listService)
serviceRouter.post("/remove",removeService);


export default serviceRouter;