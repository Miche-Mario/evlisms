import { Sequelize } from "sequelize";
import db from '../config/Database.js';





const  {DataTypes} = Sequelize;

const StudentsAccomodations = db.define('studentsacco', {
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
    total: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: false
        }
    }
},{
    freezeTableName: true
})







export default StudentsAccomodations