import Courses from "../models/CoursesModels.js"
import { Model, Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"
import Course from "../models/CourseMoels.js";
import SubCourse from "../models/SubCourseModels.js";
import Language from "../models/LanguageModels.js";
import Prices from "../models/PricesModels.js";


export const getCourses = async (req,res) => {
    try {
        const response = await Courses.findAll({
            attributes: ['id','uuid','language_languageid','pricetype_pricetypeid', 'active', 'course_courseid', 'subcourse_subcourseid'],
            include: [{
                model: Course
                
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
    const {data, coursename,subcoursename,language_languageid, classtype_classtypeid, pricetype_pricetypeid, description, fullduration, fullprice} = req.body;
    let courseId;
    let coursess;

  
        const course = await  Course.create({
            coursename: coursename
        });
  


        const subcourse = await SubCourse.create({
            subcoursename: subcoursename
        });
   


        
           coursess = await Courses.create({
                    active: true,
                    course_courseid: course.id,
                    subcourse_subcourseid: subcourse.id,
                    pricetype_pricetypeid: pricetype_pricetypeid,
                    description: description,
                    classtype_classtypeid: classtype_classtypeid,
                    fullduration: fullduration,
                    fullprice: fullprice,
                    language_languageid: language_languageid
                });
                res.status(201).json({msg: "Courses Well Created"});
        
              const { times, prices} = req.body;


const dataFinal = times.map((time,index) => {
  
    let dataa = {
      "times_timesid": time.time,
      "price": prices[index],
      "courses_coursesid": coursess.id
    }
    return dataa

  
  })
  console.log(dataFinal)
                 Prices.bulkCreate(dataFinal, { validate: true })
}