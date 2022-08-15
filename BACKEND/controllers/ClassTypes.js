import ClassType from "../models/ClassTypeModels.js"
import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"

export const getClassType = async (req,res) => {
    try {
        const response = await ClassType.findAll({
            attributes: ['uuid', 'classtypename']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getClassTypeById = (req,res) => {
    
}
export const createClassType = async(req,res) => {
    const {classtypename} = req.body;
    try {
        await ClassType.create({
            classtypename: classtypename
        });
        res.status(201).json({msg: "ClassType Well Created"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateClassType = (req,res) => {
    
}
export const deleteClassType = (req,res) => {
    
}