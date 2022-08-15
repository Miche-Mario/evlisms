import Courses from "../models/CoursesModels.js"
import { Model, Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"
import Course from "../models/CourseMoels.js";
import SubCourse from "../models/SubCourseModels.js";
import Language from "../models/LanguageModels.js";

export const getCourses = async (req,res) => {
    try {
        const response = await Courses.findAll({
            attributes: ['id','uuid','language_languageid','pricetype_pricetypeid', 'active', 'course_courseid', 'subcourse_subcourseid'],
            include: [{
                model: Course,
                model: Language
                
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getSubCourses =async (req,res) => {
    try {
        const response = await Course.findOne({  
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

export const createCourses = async(req,res) => {
    const {active, pricetype_pricetypeid, course_courseid, subcourse_subcourseid} = req.body;
    try {
        await Courses.create({
            active: active,
            course_courseid: course_courseid,
            subcourse_subcourseid: subcourse_subcourseid,
            pricetype_pricetypeid: pricetype_pricetypeid
        });
        res.status(201).json({msg: "Courses Well Created"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateAbout = (req,res) => {
    
}
export const deleteAbout = (req,res) => {
    
}