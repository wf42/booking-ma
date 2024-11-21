import serviceModel from "../models/servicesmodel.js";
import multer from "multer";
import fs from 'fs'
import { console } from "inspector";

// add service item

const addservice = async (req,res) => {
    let image_filename =`${req.file.filename}`;
    
    const service = new serviceModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename

    })
    try {
        await service.save();
        res.json({success:true,message:"service added"})
    } catch(error) {
        console.log(error)
        res.json({success:false,message:"Error"})

    }
    
}

// all service list
const listService = async (req,res) => {
    try{
        const services = await serviceModel.find({});
        res.json({success:true,data:services})
    } catch (error) {
        console.log(error);
        res.json({success:false,massage:"Error"})
    }


}

// remove service item
const removeService = async (req,res) => {
    try {
        const service = await serviceModel.findById(req.body.id);
        fs.unlink(`uploads/${service.image}`,()=>{})
        await serviceModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"service removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
        
    }

}

export{addservice,listService,removeService}