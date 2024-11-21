import express from "express"
import { addToCart,getCart,removeFromCart } from "../controllers/cartcontroller.js"
import authMidlleware from "../middleware/auth.js"

const cartRouter = express.Router()

cartRouter.post("/add",authMidlleware,addToCart)
cartRouter.post("/remove",authMidlleware,removeFromCart)
cartRouter.post("/get",authMidlleware,getCart)

export default cartRouter;