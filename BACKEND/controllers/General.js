import General from "../models/GeneralModels.js"
import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"

export const getGeneral = async (req,res) => {
    try {
        const response = await General.findAll({
            attributes: ['id','uuid', 'generaltypes']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getGeneralById = (req,res) => {
    
}
export const createGeneral = async(req,res) => {
    const {generaltypes} = req.body;
    try {
        await General.create({
            generaltypes: generaltypes
        });
        res.status(201).json({msg: "General course type Successfully created"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateAbout = (req,res) => {
    
}
export const deleteAbout = (req,res) => {
    
}