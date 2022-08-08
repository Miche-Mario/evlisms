import Students from "../models/StudentsModels.js"
import Users from "../models/UsersModels.js"
import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"

export const getStudents = async (req,res) => {
    try {
        const response = await Students.findAll({
            attributes: ['uuid', 'passportphotographg','idscang', 'surnameg', 'forenamesg', 'dateofbirthg', 'genderg', 'citizenshipg', 'emailg', 'telhomeg']
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
    const {surnameg, forenamesg, genderg, dateofbirthg, placeofbirthg, citizenshipg,occupationg, emailg, telhomeg, telghanag, maritalg, passportidg, noteg, aboutidg, surnamee, forenamese, gendere, relationshipe,occupatione, emaile, tel1e, tel2e, addresse, surnamep, forenamesp, genderp, relationshipp, occupationp, emailp, tel1p, tel2p, addressp, nameo, addresso, tel1o, emailo, contacto, tel2o, about_aboutid, role } = req.body;
    
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
            maritalg: maritalg,
            passportidg: passportidg,
            noteg: noteg,
            aboutidg: aboutidg,
            passportphotographg: req.files['passportphotographg'],
            idscang: req.files['idscang'],
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
            role: role

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
export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

export const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))
        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
       
    }
}).fields(
    [
        {name:'passportphotographg',maxCount: 1},
        {name:'idscang',maxCount: 1}
    ]
)

