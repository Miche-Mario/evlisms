import React, { useState, useEffect, useContext } from 'react'
import Invoice from '../../PDF/Invoice'
import {PDFViewer, PDFDownloadLink }  from '@react-pdf/renderer';
import { BsPrinter } from "react-icons/bs"
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import { StepperContext } from '../../../contexts/stepperContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Complete = () => {
  const { studentData, setStudentData } = useContext(StepperContext)


  const navigate = useNavigate();
  const [msg, setMsg] = useState()


  const saveProspect =  (e) => {
    e.preventDefault();
    try {
       axios.post(`${process.env.REACT_APP_BASE_URL}/prospects`, {
        prospectid: studentData.passportidg &&  studentData.passportidg,
        surnameg: studentData.surnameg && studentData.surnameg,
        forenamesg: studentData.forenamesg && studentData.forenamesg,
        genderg: studentData.genderg &&  studentData.genderg,
        dateofbirthg: studentData.dateofbirthg && studentData.dateofbirthg,
        placeofbirthg: studentData.placeofbirthg && studentData.placeofbirthg,
        citizenshipg: studentData.citizenshipg &&  studentData.citizenshipg,
        occupationg: studentData.occupationg && studentData.occupationg,
        emailg: studentData.emailg && studentData.emailg,
        telhomeg: studentData.telhomeg && studentData.telhomeg,
        telghanag: studentData.telghanag && studentData.telghanag,
        addresshomeg: studentData.addresshomeg && studentData.addresshomeg,
        addressghanag: studentData.addresshomeg && studentData.addresshomeg,
        maritalg: studentData.maritalg && studentData.maritalg,
        passportidg: studentData.passportidg &&  studentData.passportidg,
        academiclevelg: studentData.academiclevelg && studentData.academiclevelg,
        noteg: studentData.noteg && studentData.noteg,
        aboutidg: studentData.aboutidg && studentData.aboutidg,
        passportphotographg: studentData.passportphotographg,
        idscang: studentData.idscang && studentData.idscang,
        surnamee: studentData.surnamee && studentData.surnamee,
        forenamese: studentData.forenamese && studentData.forenamese,
        gendere: studentData.gendere && studentData.gendere,
        relationshipe: studentData.relationshipe && studentData.relationshipe,
        occupatione: studentData.occupatione && studentData.occupatione,
        emaile: studentData.emaile && studentData.emaile,
        tel1e: studentData.tel1e && studentData.tel1e,
        tel2e: studentData.tel2e && studentData.tel2e,
        addresse: studentData.addresse && studentData.addresse,
        surnamep: studentData.surnamep && studentData.surnamep,
        forenamesp: studentData.forenamesp && studentData.forenamesp,
        genderp: studentData.genderp && studentData.genderp,
        relationshipp: studentData.relationshipp && studentData.relationshipp,
        occupationp: studentData.occupationp && studentData.occupationp,
        emailp: studentData.emailp && studentData.emailp,
        tel1p: studentData.tel1p && studentData.tel1p,
        tel2p: studentData.tel2p && studentData.tel2p,
        addressp: studentData.addressp && studentData.addressp,
        nameo: studentData.nameo && studentData.nameo,
        addresso: studentData.addresso && studentData.addresso,
        tel1o: studentData.tel1o && studentData.tel1o,
        emailo: studentData.emailo && studentData.emailo,
        contacto: studentData.contacto && studentData.contacto,
        tel2o: studentData.tel2o && studentData.tel2o,
        isstudent: studentData && false,
        about_aboutid: studentData.aboutidg && studentData.aboutidg,
        startdate: studentData.startdate && studentData.startdate,
        enddate: studentData.finaldate > 0 && studentData.finaldate,
      },{   
        headers: { "Content-Type": "multipart/form-data" } 
});
      console.log("ok")

    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }

  const saveInvoice =  (e) => {
    e.preventDefault();
    try {
       axios.post(`${process.env.REACT_APP_BASE_URL}/invoice`, {
        courselist: studentData.courseList.length > 0 ? studentData.courseList : {},
        examlist: studentData.examList.length > 0 ? studentData.examList : {},
        purchaselist:  studentData.purchaseList.length > 0 ? studentData.purchaseList : {},
        accolist: studentData.accoList.length > 0 ? studentData.accoList : {},
        otherlist: studentData.otherFeeList.length > 0 ? studentData.otherFeeList : {},
        registration: studentData.registrationList.length > 0 ? studentData.registrationList : {},
        currency: studentData.currency && studentData.currency,
        discount: studentData.discount && studentData.discount,
        total: studentData.total && studentData.total,
        subtotal: studentData.subtotal && studentData.subtotal,
        studdiscount: studentData.studdiscount && studentData.studdiscount,
        invoicecode: studentData.passportidg &&  studentData.passportidg,
      });
      toast.success("Invoice Well Saved")
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        toast.error("Something Wrong happen")
      }
    }
  }



  console.log(studentData)



  return (
    
  <div className='mt-1'>
    <div className='flex flex-row item-center justify-end mr-10 mb-2'>
    <ToastContainer style={{fontSize: 20}} position="top-right"/>

      <div className='flex bg-primary items-center shadow-2xl w-auto justify-center rounded-lg p-2'>
      <BsPrinter style={{color: "white", fontSize: 20, marginRight: 5}} />
       <button className=' text-white'
        onClick={(e) => {saveProspect(e); saveInvoice(e)}}
       >Save</button>
      </div>
     
      <div className='flex ml-4 w-32 items-center bg-primary shadow-2xl rounded-lg p-2'>
      <MdOutlineMarkEmailUnread style={{color: "white", fontSize: 20, marginRight: 5}} />
       <button className=' text-white'>Send Email</button>
      </div>
    </div>
  <PDFViewer
          showToolbar={false}
          style={{
            width: '100%',
            height: 500,
            backgroundColor: "white"
      
          }}
        
        >
        <Invoice studentData={studentData}/>

        </PDFViewer>

  </div>
      


  )
}

export default Complete