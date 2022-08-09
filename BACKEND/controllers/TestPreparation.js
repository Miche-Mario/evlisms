import TestPreparation from "../models/TestPreparationModels.js"
import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"

export const getTestPreparation = async (req,res) => {
    try {
        const response = await TestPreparation.findAll({
            attributes: ['id','uuid', 'testpreparationtypes']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getTestPreparationId = (req,res) => {
    
}
export const createTestPreparation = async(req,res) => {
    const {testpreparationtypes} = req.body;
    try {
        await TestPreparation.create({
            testpreparationtypes: testpreparationtypes
        });
        res.status(201).json({msg: "TestPreparation Course Type Successfully created"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateTestPreparation = (req,res) => {
    
}
export const deleteTestPreparation = (req,res) => {
    
}