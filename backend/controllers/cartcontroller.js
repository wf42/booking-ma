import userModel from "../models/userModel.js";

// Add item to user cart
const addToCart = async (req, res) => {
    try {
        if (!req.body.userId || !req.body.itemId) {
            return res.status(400).json({ success: false, message: "Invalid request data" });
        }

        let userData = await userModel.findById(req.body.userId);
        let cartData = { ...userData.cartData } || {}; // Ensure cartData is an object

        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Added to cart" });
    } catch (error) {
        console.error("Error in addToCart:", error);
        res.json({ success: false, message: "Error occurred while adding to cart" });
    }
};

// Remove item from user cart
const removeFromCart = async (req, res) => {
    try {
        const { id } = req.body; // افترض أن الطلب يرسل معرف الخدمة (id)
        if (!id) {
            return res.status(400).json({ success: false, message: "Service ID is required" });
        }
        const deletedService = await ServiceModel.findByIdAndDelete(id); // افترض أن `ServiceModel` هو اسم الموديل
        if (!deletedService) {
            return res.status(404).json({ success: false, message: "Service not found" });
        }
        res.status(200).json({ success: true, message: "Service removed successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// Fetch user cart data
const getCart = async (req, res) => {
    try {
        const { id } = req.body; // الحصول على معرف العنصر
        if (!id) {
            return res.status(400).json({ success: false, message: "Service ID is required" });
        }
        
        const deletedService = await ServiceModel.findByIdAndDelete(id); // حذف العنصر من قاعدة البيانات
        if (!deletedService) {
            return res.status(404).json({ success: false, message: "Service not found" });
        }

        res.status(200).json({ success: true, message: "Service removed successfully" });
    } catch (error) {
        console.error("Error in removeService:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export { addToCart, removeFromCart, getCart };
