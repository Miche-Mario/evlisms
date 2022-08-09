import { Sequelize } from "sequelize";
import db from '../config/Database.js';
import General from "./GeneralModels.js";


const  {DataTypes} = Sequelize;

const Generalprice = db.define('generalprice', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    general_generalid:{
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

General.hasOne(Generalprice);
Generalprice.belongsTo(General, {foreignKey: 'general_generalid'})
export default Generalprice