import Accomodation from "../models/AcoomodationModels.js"
import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"

export const getAccomodation = async (req,res) => {
    try {
    const response = await Accomodation.findAll({
            attributes: ['id','uuid', 'accomodationname', 'accomodationprice']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const geAccomodationById = (req,res) => {
    
}
export const createAccomodation = async(req,res) => {
    const {accomodationname, accomodationprice} = req.body;
    try {
        await Accomodation.create({
            accomodationname: accomodationname,
            accomodationprice: accomodationprice
        });
        res.status(201).json({msg: "Accomodation Well Created"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateAccomodation = (req,res) => {
    
}
export const deleteAccomodation = (req,res) => {
    
}