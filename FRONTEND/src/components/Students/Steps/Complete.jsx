import React, { useState, useEffect, useContext } from 'react'
import Invoice from '../../Invoice/Invoice'
import {PDFViewer }  from '@react-pdf/renderer';
import { BsPrinter } from "react-icons/bs"
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import { StepperContext } from '../../../contexts/stepperContext'



const Complete = () => {
  const { studentData, setStudentData } = useContext(StepperContext)

  return (
    
  <div className='mt-1'>
    <div className='flex flex-row item-center justify-end mr-10 mb-2'>
      <div className='flex bg-primary items-center shadow-2xl w-24 justify-center rounded-lg p-2'>
      <BsPrinter style={{color: "white", fontSize: 20, marginRight: 5}} />
       <button className=' text-white'>Print</button>
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