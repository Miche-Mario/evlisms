import Language from "../models/LanguageModels.js"
import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"

export const getLanguage = async (req,res) => {
    try {
        const response = await Language.findAll({
            attributes: ['uuid', 'languagename']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getLanguageById = (req,res) => {
    
}
export const createLanguage = async(req,res) => {
    const {languagename} = req.body;
    try {
        await Language.create({
            languagename: languagename
        });
        res.status(201).json({msg: "Language Well Created"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateLanguage = (req,res) => {
    
}
export const deleteLanguage = (req,res) => {
    
}