import TestPreparationPrice from "../models/TestPreparationPriceModels.js"
import TestPreparation from "../models/TestPreparationModels.js";
import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"

export const getTestPreparationPrice = async (req,res) => {
    try {
        const response = await TestPreparationPrice.findAll({
            attributes: ['id','uuid', 'testpreparation_testpreparationid', 'week', 'price'],
            include: [{
                model: TestPreparation,
                attributes: ['testpreparationtypes']
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getGeneralById = (req,res) => {
    
}
export const createTestPreparationPrice = async(req,res) => {
    const {testpreparation_testpreparationid, week, price} = req.body;
    try {
        await TestPreparationPrice.create({
            testpreparation_testpreparationid: testpreparation_testpreparationid,
            week: week,
            price: price
        });
        res.status(201).json({msg: "Test Preparation Weekly Price Successfully created"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateAbout = (req,res) => {
    
}
export const deleteAbout = (req,res) => {
    
}