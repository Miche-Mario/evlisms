import React, { useState, useEffect, useContext } from 'react'
import Invoice from '../../Invoice/Invoice'
import {PDFViewer }  from '@react-pdf/renderer';
import { BsPrinter } from "react-icons/bs"
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import { StepperContext } from '../../../contexts/stepperContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const Complete = () => {
  const { studentData, setStudentData } = useContext(StepperContext)

  const navigate = useNavigate();
  const [msg, setMsg] = useState()


  const saveStudent =  (e) => {
    e.preventDefault();
    try {
       axios.post(`${process.env.REACT_APP_BASE_URL}/students`, {
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
        about_aboutid: studentData.about_aboutid && studentData.about_aboutid,
        startdate: studentData.startdate && studentData.startdate,
        enddate: studentData.enddate && studentData.enddate,

      },{   
        headers: { "Content-Type": "multipart/form-data" } 
});
      console.log(studentData)

    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }


  console.log(studentData)



  return (
    
  <div className='mt-1'>
    <div className='flex flex-row item-center justify-end mr-10 mb-2'>
      <div className='flex bg-primary items-center shadow-2xl w-24 justify-center rounded-lg p-2'>
      <BsPrinter style={{color: "white", fontSize: 20, marginRight: 5}} />
       <button className=' text-white'
        onClick={saveStudent}
       >Save & Print</button>
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