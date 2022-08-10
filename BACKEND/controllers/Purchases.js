import Purchase from "../models/PurchasesModels.js"
import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"

export const getPurchase = async (req,res) => {
    try {
        const response = await Purchase.findAll({
            attributes: ['id','uuid', 'purchasename', 'purchaseprice']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getPurchaseById = (req,res) => {
    
}
export const createPurchase = async(req,res) => {
    const {purchasename, purchaseprice} = req.body;
    try {
        await Purchase.create({
            purchasename: purchasename,
            purchaseprice: purchaseprice
        });
        res.status(201).json({msg: "Purchase Well Created"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updatePurchase = (req,res) => {
    
}
export const deletePurchase = (req,res) => {
    
}