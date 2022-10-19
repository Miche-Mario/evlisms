import Students from "../models/StudentsModels.js"
import Users from "../models/UsersModels.js"
import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"
import About from "../models/AboutModels.js";

export const getStudents = async (req,res) => {
    try {
        const response = await Students.findAndCountAll({
            attributes: ['studentid','startdate','enddate','id','uuid', 'about_aboutid','passportphotographg','idscang', 'surnameg', 'forenamesg', 'dateofbirthg', 'genderg', 'citizenshipg', 'emailg', 'telhomeg'],
            include: [{
                model: About
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const getUserByName = async(req,res) => {
    const { search } = await req.body;
    try {
        const response = await Users.findAndCountAll({
            attributes: ['startdate','enddate','id','uuid', 'about_aboutid','passportphotographg','idscang', 'surnameg', 'forenamesg', 'dateofbirthg', 'genderg', 'citizenshipg', 'emailg', 'telhomeg'],
            where: {
                forenamesg: {
                    [Op.like]: `%${search}%`
                  }
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const getStudentById =async (req,res) => {
    try {
        const response = await Students.findOne({
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getStudentByName =async (req,res) => {
    let { name } = req.body;

    name = name.toLowerCase();
    try {
        const response = await Students.findAll({
        where: {
            forenamesg: {
                [Op.like]: '%' + name + '%'
            }
        }
    });
    res.status(200).json(response)
    } catch(error) {
        res.status(500).json({msg: error.message});
    }
}
export const createStudent = async(req,res) => {
    const url = req.protocol + '://' + req.get('host')

    const {surnameg, forenamesg, genderg, dateofbirthg, placeofbirthg, citizenshipg,occupationg, emailg, telhomeg, telghanag,addresshomeg, addressghanag, maritalg, passportidg,academiclevelg, noteg, aboutidg, surnamee, forenamese, gendere, relationshipe,occupatione, emaile, tel1e, tel2e, addresse, surnamep, forenamesp, genderp, relationshipp, occupationp, emailp, tel1p, tel2p, addressp, nameo, addresso, tel1o, emailo, contacto, tel2o, about_aboutid, startdate, enddate } = req.body;
    
    try {
        await Students.create({
            surnameg: surnameg,
            forenamesg: forenamesg,
            genderg: genderg,
            dateofbirthg: dateofbirthg,
            placeofbirthg: placeofbirthg,
            citizenshipg: citizenshipg,
            occupationg: occupationg,
            emailg: emailg,
            telhomeg: telhomeg,
            telghanag: telghanag,
            addresshomeg: addresshomeg,
            addressghanag: addresshomeg,
            maritalg: maritalg,
            passportidg: passportidg,
            academiclevelg: academiclevelg,
            noteg: noteg,
            aboutidg: aboutidg,
            passportphotographg: req.files.passportphotographg &&  url + '/Images/' + req.files.passportphotographg[0].filename,
            idscang: req.files.idscang && url + '/Images/' + req.files.idscang[0].filename,
            surnamee: surnamee,
            forenamese: forenamese,
            gendere: gendere,
            relationshipe: relationshipe,
            occupatione: occupatione,
            emaile: emaile,
            tel1e: tel1e,
            tel2e: tel2e,
            addresse: addresse,
            surnamep: surnamep,
            forenamesp: forenamesp,
            genderp: genderp,
            relationshipp: relationshipp,
            occupationp: occupationp,
            emailp: emailp,
            tel1p: tel1p,
            tel2p: tel2p,
            addressp: addressp,
            nameo: nameo,
            addresso: addresso,
            tel1o: tel1o,
            emailo: emailo,
            contacto: contacto,
            tel2o: tel2o,
            about_aboutid: about_aboutid,
            startdate: startdate,
            enddate: enddate

        },{   
            headers: { "Content-Type": "multipart/form-data" } 
    });
        res.status(200).json({msg: "Student well created"})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateStudent = (req,res) => {
    
}
export const deleteStudent = (req,res) => {
    
}







const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images');
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, '-' + fileName)
    }
});
export const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
}).fields(
    [
        {name:'passportphotographg',maxCount: 1},
        {name:'idscang',maxCount: 1}
    ]
)

