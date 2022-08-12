import Exam from "../models/ExamModels.js"
import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"

export const getExam = async (req,res) => {
    try {
        const response = await Exam.findAll({
            attributes: ['id','uuid', 'examname', 'examprice']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getExamById = (req,res) => {
    
}
export const createExam = async(req,res) => {
    const {examname, examprice} = req.body;
    try {
        await Exam.create({
            examname: examname,
            examprice: examprice
        });
        res.status(201).json({msg: "Exams Well Created"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateExam = (req,res) => {
    
}
export const deleteExam = (req,res) => {
    
}