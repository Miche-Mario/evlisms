import { Sequelize } from "sequelize";
import db from '../config/Database.js';

const  {DataTypes} = Sequelize;

const TestPreparation = db.define('testpreparation', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    testpreparationtypes:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    }
},{
    freezeTableName: true
})
export default TestPreparation