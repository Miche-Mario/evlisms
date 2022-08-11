import Prices from "../models/PricesModels.js"
import { Model, Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"


export const getPrices = async (req,res) => {
    try {
        const response = await Prices.findAll({
            attributes: ['price'],
            include: [{
                model: Course}
            ]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
/* 
export const getPricesById =async (req,res) => {
    try {
        const response = await Prices.findOne({  
            attributes: [],
            where: {
                uuid: req.params.id
            }, 
            include: [
                {
                  model: SubCourse,
                  as: 'Subcourses',
                  attributes: ["subcoursename"],
                },],
                
            
                 
          
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
 */
export const createPrices = async(req,res) => {
    const {price, times_timesid, courses_courseid} = req.body;
    try {
        await Courses.create({
            price: price,
            times_timesid: times_timesid,
            courses_courseid: courses_courseid
        });
        res.status(201).json({msg: "Price Well Created"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updatePrices = (req,res) => {
    
}
export const deletePrices = (req,res) => {
    
}