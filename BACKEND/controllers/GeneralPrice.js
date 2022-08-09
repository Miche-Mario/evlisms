import GeneralPrice from "../models/GeneralpriceModels.js"
import General from "../models/GeneralModels.js";
import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"

export const getGeneralPrice = async (req,res) => {
    try {
        const response = await GeneralPrice.findAll({
            attributes: ['id','uuid', 'general_generalid', 'week', 'price'],
            include: [{
                model: General,
                attributes: ['generaltypes']
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getGeneralById = (req,res) => {
    
}
export const createGeneralPrice = async(req,res) => {
    const {general_generalid, week, price} = req.body;
    try {
        await GeneralPrice.create({
            general_generalid: general_generalid,
            week: week,
            price: price
        });
        res.status(201).json({msg: "General Weekly Price Successfully created"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateAbout = (req,res) => {
    
}
export const deleteAbout = (req,res) => {
    
}