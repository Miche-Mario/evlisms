import Courses from "../models/CoursesModels.js"
import { Model, Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"
import Course from "../models/CourseMoels.js";
import SubCourse from "../models/SubCourseModels.js";
import Language from "../models/LanguageModels.js";
import Prices from "../models/PricesModels.js";
import ClassType from "../models/ClassTypeModels.js";
import { getUnpackedSettings } from "http2";


export const getCourses = async (req,res) => {
    try {
        const response = await Courses.findAll({
            attributes: ['id','uuid','language_languageid','coursecode','fullduration','pricetype_pricetypeid', 'active', 'course_courseid', 'description', 'subcourse_subcourseid'],
            include: [
                {model: Course},
                {model: Language},
                {model: SubCourse},
                {model: ClassType}
           ]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getCoursesById =async (req,res) => {
    try {
        const response = await Courses.findOne({  
            where: {
                id: req.params.id
            }, 
            include: [
                {model: Course},
                {model: Language},
                {model: SubCourse},
                {model: ClassType}
           ]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}




 export const createCourses = async(req,res) => {
    const { coursename,subcoursename,language_languageid, classtype_classtypeid, pricetype_pricetypeid, description, fullduration, fullprice} = req.body;
    let subcourse;
    let coursess;

  
        const course = await  Course.create({
            coursename: coursename
        });
  

        if(subcoursename){

         subcourse = await SubCourse.create({
            subcoursename: subcoursename
        });}
   


        
           coursess = await Courses.create({
                    active: true,
                    course_courseid: course.id ,
                    subcourse_subcourseid: subcoursename ? subcourse.id : null,
                    description: description,
                    classtype_classtypeid: classtype_classtypeid,
                    fullduration: fullduration,
                    fullprice: fullprice,
                    language_languageid: language_languageid
                });
        
              const { times, prices} = req.body;


const dataFinal = await times.map((time,index) => {
  
    let dataa = {
      "times_timesid": time.id,
      "price": prices[index] ? prices[index] : null ,
      "courses_coursesid": coursess.id
    }
    return dataa
})
 
                  Prices.bulkCreate(dataFinal, { validate: true })
}

export const updateCourses = async(req,res) => {
    const courses = await Courses.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!courses) return res.status(404).json({msg: "Courses doesn't not exist" });
    const {courseid, coursename, subcourseid, subcoursename, 
        description, fullprice, fullduration,
        language_languageid,classtype_classtypeid} = req.body;
    
    
        await Course.update({
            coursename: coursename,
        }, {
            where: {
                id: courseid
            }
        });
       
     subcourseid &&   await SubCourse.update({
            subcoursename: subcoursename,
        }, {
            where: {
                id: subcourseid
            }
        });

        await Courses.update({
            description: description,
            fullprice: fullprice,
            fullduration: fullduration,
            language_languageid: language_languageid,
            classtype_classtypeid: classtype_classtypeid,
            description: description
        }, {
            where: {
                id: req.params.id,
          
            }
        });
}