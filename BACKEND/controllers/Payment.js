import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"
import Payment from "../models/PaymentModels.js";
import Students from "../models/StudentsModels.js";
import Invoice from "../models/InvoiceModels.js";
import PaymentMethods from "../models/PaymentMethodModels.js";
import Discount from "../models/DiscountModels.js";

export const getPayment = async (req,res) => {
    try {
        const response = await Payment.findAndCountAll({
            attributes: ['uuid', 'total','first', 'second','balance','timepayment', 'createdAt', 'updatedAt'],
            include: [
                {model: Students},
                {model: Invoice},
                {model: PaymentMethods}
            ]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createPayment = async(req,res) => {  
    let invoice;
    const {studentid, code, courselist, examlist, purchaselist, accolist, currency, totall, subtotal,registration, studdiscount,discount, otherlist } = req.body;
    try {
        invoice = await Invoice.create({
            courselist: courselist ,
            examlist: examlist,
            purchaselist: purchaselist,
            accolist: accolist,
            currency: currency,
            total: totall,
            subtotal: subtotal,
            discount: discount,
            otherlist: otherlist,
            payed: true,
            registration: registration,
            student_studentid: studentid
    });
   
////////////////////////UPDATE DISCOUNT////////////////////////////////////////////////
const discountt = await Discount.findOne({
    where: {
        code: code
    }
});
discountt  &&
    await Discount.update({
        student_studentid: studentid,
        used: true
    }, {
        where: {
            id: discountt.id
        }
    });
///////////////////////////ADD PAYMENT////////////////////////////////////////////////
    const {total, first, balance, paymentmethod, timepayment} = req.body;
  
        await Payment.create({
            total: total,
            first: first,
            balance: balance,
            student_studentid: studentid,
            invoice_invoiceid: invoice.id,
            paymth_paymtid: paymentmethod,
            timepayment: timepayment
        });
        res.status(201).json({msg: "Payment Well Created"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

export const getPaymentById = async(req,res) => {

    try {
        const response = await Payment.findOne({
            attributes: ['uuid', 'total','first', 'second','balance','timepayment', 'createdAt'],
            include: [
                {model: Students},
                {model: Invoice},
                {model: PaymentMethods}
            ],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}



export const updatePayment = async(req,res) => {
    const pay = await Payment.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!pay) return res.status(404).json({msg: "Payment doesn't not exist" });
    const {paying, timepayment, first, balance} = req.body;
    
    try {
        await Payment.update({
            first: first,
            second: paying,
            balance: balance,
            timepayment: timepayment,
        }, {
            where: {
                id: pay.id
            }
        });
        res.status(200).json({msg: "Payment  updated"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}


/* 
export const getExamPrice = async(req,res) => {
    const {examid} = req.body;

    try {
        const response = await Exam.findOne({
            attributes: ['id', 'examprice', 'description'],
            where: {
                id: examid
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateExam = async(req,res) => {
    const exam = await Exam.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!exam) return res.status(404).json({msg: "Exam doesn't not exist" });
    const {examname, examprice, description} = req.body;
    
    try {
        await Exam.update({
            examname: examname,
            examprice: examprice,
            description: description
        }, {
            where: {
                id: exam.id
            }
        });
        res.status(200).json({msg: "Exam  updated"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const deleteExam = async(req,res) => {
    const exam = await Exam.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!exam) return res.status(404).json({msg: "Exam doesn't not exist" });
    try {
        await Exam.destroy({
            where: {
                id: exam.id
            }
        });
        res.status(201).json({msg: "Exam Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }

} */