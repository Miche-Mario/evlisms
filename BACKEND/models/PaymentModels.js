
import { Sequelize } from "sequelize";
import db from '../config/Database.js';
import Invoice from "./InvoiceModels.js";
import Students from "./StudentsModels.js";

const  {DataTypes} = Sequelize;

const Payment = db.define('payment', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    total:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate:{
            notEmpty: false        
        }
    },
    first:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate:{
            notEmpty: false        
        }
    },
    second:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate:{
            notEmpty: false        
        }
    },
    balance:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate:{
            notEmpty: false        
        }
    }
   
},{
    freezeTableName: true
})

Payment.belongsTo(Students, {foreignKey: 'student_studentid'});
Payment.belongsTo(Invoice, {foreignKey: 'invoice_invoiceid'});


export default Payment