import StudentsCourses from "../models/StudentsCoursesModels.js"
import { Model, Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"


export const getStudentsCourses = async (req,res) => {
    try {
        const response = await StudentsCourses.findAll({
            attributes: ['id','uuid', 'courses_coursesid', 'students_studentsid', 'total', 'duration', 'startdate', 'enddate', 'enrollementdate'],
   
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
/* 
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
} */

export const createStudentsCourses = async(req,res) => {
    const { total, duration, startdate, enddate, enrollementdate, courses_coursesid, students_studentsid  } = req.body;
    try {
        await StudentsCourses.create({
            total: total,
            duration: duration,
            startdate: startdate,
            enddate: enddate,
            enrollementdate: enrollementdate,
            courses_coursesid: courses_coursesid,
            students_studentsid: students_studentsid,
        });
        res.status(201).json({msg: "StudentsCourses Well Created"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateStudentsCourses = (req,res) => {
    
}
export const deleteStudentsCourses = (req,res) => {
    
}