import About from "../models/AboutModels.js"
import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"

export const getAbouts = async (req,res) => {
    try {
        const response = await About.findAll({
            attributes: ['id','uuid', 'aboutname']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getAboutById = (req,res) => {
    
}
export const createAbout = async(req,res) => {
    const {aboutname} = req.body;
    try {
        await About.create({
            aboutname: aboutname
        });
        res.status(201).json({msg: "About Successfully created"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateAbout = (req,res) => {
    
}
export const deleteAbout = (req,res) => {
    
}