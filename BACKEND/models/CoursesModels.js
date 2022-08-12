import { Sequelize } from "sequelize";
import db from '../config/Database.js';
import Course from "./CourseMoels.js";
import SubCourse from "./SubCourseModels.js";


const  {DataTypes} = Sequelize;

const Courses = db.define('courses', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
},{
    freezeTableName: true
})






export default Courses