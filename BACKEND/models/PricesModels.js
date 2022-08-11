import { Sequelize } from "sequelize";
import db from '../config/Database.js';



const  {DataTypes} = Sequelize;

const Courses = db.define('courses', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    price: {
        type: DataTypes.INT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
},{
    freezeTableName: true
})






export default Courses