import Purchases from "../models/PurchasesModels.js"
import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"

export const getPurchases = async (req,res) => {
    try {
        const response = await Purchases.findAll({
            attributes: ['uuid', 'id','purchasename', 'purchaseprice']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getPurchasePrice = async(req,res) => {
    const {purchaseid} = req.body;

    try {
        const response = await Purchases.findOne({
            attributes: ['purchaseprice'],
            where: {
                id: purchaseid
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const getPurchaseById = async(req,res) => {
    try {
        const response = await Purchases.findOne({
            attributes: ['uuid', 'purchasename', 'purchaseprice'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createPurchase = async(req,res) => {
    const {purchasename,purchaseprice} = req.body;
    try {
        await Purchases.create({
            purchasename: purchasename,
            purchaseprice:purchaseprice
        });
        res.status(201).json({msg: "Purchase Well Created"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updatePurchase = async(req,res) => {
    const purchase = await Purchases.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!purchase) return res.status(404).json({msg: "Purchase doesn't not exist" });
    const {purchasename, purchaseprice} = req.body;
    
    try {
        await Purchases.update({
            purchasename: purchasename,
            purchaseprice:purchaseprice
        }, {
            where: {
                id: purchase.id
            }
        });
        res.status(200).json({msg: "Purchase  updated"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const deletePurchase = async(req,res) => {
    const purchase = await Purchases.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!purchase) return res.status(404).json({msg: "Purchase doesn't not exist" });
    try {
        await Purchases.destroy({
            where: {
                id: purchase.id
            }
        });
        res.status(201).json({msg: "Purchase Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }

}