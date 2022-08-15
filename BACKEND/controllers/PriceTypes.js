import PriceType from "../models/PriceTypeModels.js"
import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"

export const getPriceType = async (req,res) => {
    try {
        const response = await PriceType.findAll({
            attributes: ['uuid', 'pricetypename']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getPriceTypeById = (req,res) => {
    
}
export const createPriceType = async(req,res) => {
    const {pricetypename} = req.body;
    try {
        await PriceType.create({
            pricetypename: pricetypename
        });
        res.status(201).json({msg: "PriceType Well Created"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updatePriceTypes = (req,res) => {
    
}
export const deletePriceTypes = (req,res) => {
    
}