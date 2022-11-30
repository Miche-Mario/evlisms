import Prospect from "../models/ProspectModels.js"
import Users from "../models/UsersModels.js"
import { Sequelize } from "sequelize";
import {Op} from 'sequelize'
import multer from "multer";
import path from "path"
import About from "../models/AboutModels.js";

export const getProspects = async (req,res) => {
    try {
        const response = await Prospect.findAndCountAll({
            attributes: ['prospectid','startdate','enddate','id','uuid', 'about_aboutid','passportphotographg','idscang', 'surnameg', 'forenamesg', 'dateofbirthg', 'genderg', 'citizenshipg', 'emailg', 'telhomeg'],
            include: [{
                model: About
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}



export const getProspectByPassportId = async(req,res) => {
    const { passportidg } = await req.body;
    try {
        const response = await Students.findOne({
            attributes: [ 'surnameg', 'forenamesg', 'id', 'prospectid'],
            where: {
                passportidg: passportidg
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const getProspectById =async (req,res) => {
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

export const getProspectByProspectId =async (req,res) => {
    let { prospectid } = req.body;

    try {
        const response = await Prospect.findOne({
        where: {
            prospectid: prospectid
        }
    });
    res.status(200).json(response)
    } catch(error) {
        res.status(500).json({msg: error.message});
    }
}
export const createProspect = async(req,res) => {
    const url = req.protocol + '://' + req.get('host')

    const {prospectid,surnameg, forenamesg, genderg, dateofbirthg, placeofbirthg, citizenshipg,occupationg, emailg, telhomeg, telghanag,addresshomeg, addressghanag, maritalg, passportidg,academiclevelg, noteg, aboutidg, surnamee, forenamese, gendere, relationshipe,occupatione, emaile, tel1e, tel2e, addresse, surnamep, forenamesp, genderp, relationshipp, occupationp, emailp, tel1p, tel2p, addressp, nameo, addresso, tel1o, emailo, contacto, tel2o, about_aboutid, startdate, enddate } = req.body;
    
    try {
        await Prospect.create({
            prospectid: "EVLI" + prospectid,
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
            enddate: enddate,
            isstudent: false

        },{   
            headers: { "Content-Type": "multipart/form-data" } 
    });
        res.status(200).json({msg: "Prospect well created"})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateProspect = (req,res) => {
    
}
export const deleteProspect = (req,res) => {
    
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

