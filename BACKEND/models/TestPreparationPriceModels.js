import { Sequelize } from "sequelize";
import db from '../config/Database.js';
import TestPreparation from "./TestPreparationModels.js";


const  {DataTypes} = Sequelize;

const TestPreparationPrice = db.define('testpreparationprice', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    testpreparation_testpreparationid:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
                }
    },
    week:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    freezeTableName: true
})

TestPreparation.hasOne(TestPreparationPrice);
TestPreparationPrice.belongsTo(TestPreparation, {foreignKey: 'testpreparation_testpreparationid'})
export default TestPreparationPrice