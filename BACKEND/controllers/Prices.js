import Prices from "../models/PricesModels.js"
import { Model, Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"
import Courses from "../models/CoursesModels.js";
import Times from "../models/TimeModels.js";


export const getPrices = async (req,res) => {
    try {
        const response = await Prices.findAll({
            attributes: ['id','price','times_timesid'],
            include: [{
                model: Courses}
            ]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getCoursesPrice =async (req,res) => {
    const {times_timesid, course_courseid, subcourse_subcourseid} = req.body;
    let responsee;
        if(subcourse_subcourseid == null) {
            responsee = await Courses.findOne({ 
                attributes: ['id'],
                where: {
                    course_courseid: course_courseid
                }, 
            
            });
        } else {
            responsee = await Courses.findOne({ 
                attributes: ['id'],
                where: {
                    course_courseid: course_courseid,
                    subcourse_subcourseid: subcourse_subcourseid
                }, 
            
            });
        }
    
        
        
        try {
            const response = await Prices.findOne({ 
                attributes: ['price'],
                where: {
                    courses_coursesid: responsee.id,
                    times_timesid: times_timesid
                }, 
            
            });
            
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
}

export const createPrices = async(req,res) => {
    const {price, times_timesid, courses_coursesid} = req.body;
    try {
        await Prices.create({
            price: price,
            times_timesid: times_timesid,
            courses_coursesid: courses_coursesid
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