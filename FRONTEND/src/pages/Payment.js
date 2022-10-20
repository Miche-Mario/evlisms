import React, {useEffect, useState} from 'react'
import Layout from '../components/Screens/Layout'
import '../paymentstyle.css'

const Payment = () => {

  const getTotalFromLS = () => {
    const data = localStorage.getItem('total');
    if (data) {
      return JSON.parse(data)
    } else {
      return []
    }
  }

  const getSubTotalFromLS = () => {
    const data = localStorage.getItem('subtotal');
    if (data) {
      return JSON.parse(data)
    } else {
      return []
    }
  }

  
  const getDiscountFromLS = () => {
    const data = localStorage.getItem('discount');
    if (data) {
      return JSON.parse(data)
    } else {
      return []
    }
  }

  const getCurrencyFromLS = () => {
    const data = localStorage.getItem('currency');
    if (data) {
      return JSON.parse(data)
    } else {
      return []
    }
  }
  
  const getCourseDataFromLS = () => {
    const data = localStorage.getItem('courseList');
    if (data) {
      return JSON.parse(data)
    } else {
      return []
    }
  }
  const getExamDataFromLS = () => {
    const data = localStorage.getItem('examList');
    if (data) {
      return JSON.parse(data)
    } else {
      return []
    }
  }
  const getPurchaseDataFromLS = () => {
    const data = localStorage.getItem('purchaseList');
    if (data) {
      return JSON.parse(data)
    } else {
      return []
    }
  }
  const getAccoDataFromLS = () => {
    const data = localStorage.getItem('accoList');
    if (data) {
      return JSON.parse(data)
    } else {
      return []
    }
  }

  const getOtherFeeDataFromLS = () => {
    const data = localStorage.getItem('otherFeeList');
    if (data) {
      return JSON.parse(data)
    } else {
      return []
    }
  }


  const getRegistrationDataFromLS = () => {
    const data = localStorage.getItem('registration');
    if (data) {
      return JSON.parse(data)
    } else {
      return []
    }
  }
  const [total, setTotal] = useState(getTotalFromLS())
  const [subtotal, setSubTotal] = useState(getSubTotalFromLS())
  const [discount, setDiscount] = useState(getDiscountFromLS())

  const [currency, setCurrencty] = useState(getCurrencyFromLS())

  const [courseList, setCourseList] = useState(getCourseDataFromLS())
  const [examList, setExamList] = useState(getExamDataFromLS())
  const [purchaseList, setPurchaseList] = useState(getPurchaseDataFromLS())
  const [accoList, setAccoList] = useState(getAccoDataFromLS())
  const [otherFeeList, setOtherFeeList] = useState(getOtherFeeDataFromLS())
  const [registrationList, setRegistrationList] = useState(getRegistrationDataFromLS)


















  

  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}


console.log(currency)
  return (



    <Layout>
        <div className='mt-3'>
          <div className=' ml-32 flex flex-row w-full '>
            <div className='flex items-center ' >
              <p className='text-xl font-medium'>Student ID</p>
              <input type='text' className='ml-4 w-48 p-2 border'/>
              
            </div>
            <div className='flex items-center ml-4 ' >
              <p className='text-xl font-medium'>INVOICE ID</p>
              <input type='text' className='ml-4 w-48 p-2 border'/>
            </div>
          </div>
          

          <div>
          <div class="containerr mt-3">
        <div class="body-sectionn">
        <div className='mt-3'>
            <div className='flex flex-row '>
              <div className='text-xl font-medium'>Student Name:</div>
              <div className='ml-5 font-bold text-xl'>LASSISSI ABDOUL HAMID OPKEYEMI</div>
            </div>
            <p className='ml-40 text-lg'> INTENSIVE ENGLISH FOR 06 MONTHS WITH 08 WEEKS COMPUTER</p>
          </div>
            <br/>
            <table class="table-bordered">
                <thead>
                    <tr>
                        <th class="ww-20">Quantity</th>
                        <th className="ww-32">Description</th>
                        <th class="ww-20">Unit Price</th>
                        <th class="ww-20">Line Total</th>
                    </tr>
                </thead>
                <tbody>
                  { 
                    registrationList && registrationList.map((regis, index) => (
                      <tr key={index * (Math.random() * 3)}>
                        <td>1</td>
                        <td class="ww-32">{regis.registrationname}</td>
                        <td>{regis.lecurrency} {separator(regis.regir)}</td>
                        <td>{regis.lecurrency} {separator(regis.regir)}</td>
                    </tr>
                    ))
                     
                  }

                  { 
                    courseList && courseList.map((course, index) => (
                      <tr key={index * (Math.random() * 3)}>
                        <td>1</td>
                        <td>{course.coursedescription}</td>
                        <td>{course.lecurrency} {separator(course.price)}</td>
                        <td>{course.lecurrency} {separator(course.price)}</td>
                    </tr>
                    ))
                     
                  }

                  { 
                    examList && examList.map((exam, index) => (
                      <tr key={index * (Math.random() * 3)}>
                        <td>1</td>
                        <td>{exam.examdescription}</td>
                        <td>{exam.lecurrency} {separator(exam.examprice)}</td>
                        <td>{exam.lecurrency} {separator(exam.examprice)}</td>
                    </tr>
                    ))
                     
                  }

                  { 
                    purchaseList && purchaseList.map((pur, index) => (
                      <tr key={index * (Math.random() * 3)}>
                        <td>1</td>
                        <td>{pur.purchasedescription}</td>
                        <td>{pur.lecurrency} {separator(pur.purchaseprice)}</td>
                        <td>{pur.lecurrency} {separator(pur.purchaseprice)}</td>
                    </tr>
                    ))
                     
                  }
                  { 
                    accoList && accoList.map((acco, index) => (
                      <tr key={index * (Math.random() * 3)}>
                        <td>{acco.acotimes}</td>
                        <td>{acco.accodescription}</td>
                        <td>{acco.lecurrency} {separator(acco.accoprice)}</td>
                        <td>{acco.lecurrency} {separator(acco.acotimes * acco.accoprice)}</td>
                    </tr>
                    ))
                     
                  }

                  { 
                    otherFeeList && otherFeeList.map((other, index) => (
                      <tr key={index * (Math.random() * 3)}>
                        <td>1</td>
                        <td>{other.otherfeedescription}</td>
                        <td>{other.lecurrency} {separator(other.otherfeeprice)}</td>
                        <td>{other.lecurrency} {separator(other.otherfeeprice)}</td>
                    </tr>
                    ))
                     
                  }
                  
                    <tr>
                        <td colspan="3" class="text-right">Subtotal:</td>
                        <td className='font-bold'> {currency.lecurrency} {separator(subtotal)}</td>
                    </tr>
                    <tr>
                        <td colspan="3" class="text-right">Discount:</td>
                        <td className='font-bold'> {currency.lecurrency} {discount}</td>
                    </tr>
                    <tr>
                        <td colspan="3" class="text-right">Total:</td>
                        <td className='font-bold'> {currency.lecurrency} {separator(total)}</td>
                    </tr>
                    <tr>
                        <td colspan="3" class="text-right">Amount Paid 1st:</td>
                        <td className='font-bold flex justify-center items-center'>{currency.lecurrency}
                          <input type="text" className='p-1 border ml-1 border-red text-red w-28 text-center text-bold'/>                        
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" class="text-right">Amount Paid 2nd:</td>
                        <td className='font-bold flex justify-center items-center'>{currency.lecurrency}
                          <input type="text" className=' p-1 text-red border-red border ml-1 w-28 text-center text-bold'/>                        
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" class="text-right">Balance:</td>
                        <td className='font-bold'> {currency.lecurrency} 18,500</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <div className='flex flex-row items-center'>
              <h3 class="heading">Payment Mode:</h3>
              <select id="countries" class="ml-3 3bg-gray-50 mb-4   text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5">
                  <option></option>
                  <option value="US">Cash</option>
                  <option value="US">Mobile Money</option>
                  <option value="US">Bank Transfer</option>
                  <option value="US">Online Payment</option>


                </select>
            </div>
        </div>

        <div class="body-section">
            <div className='flex justify-between items-start'>
            <button 
          className="bg-white text-slate-400 uppercase py-2 px-4
          rounded-xl font-semibold cursor-pointer border-2 border-slate-300
          hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
        >
            Back
        </button>

        <button 
          className='bg-green-500 text-white  uppercase py-2 px-4
          rounded-xl font-semibold cursor-pointer  
          hover:bg-blue-700 hover:text-white transition duration-200 ease-in-out '
        >
           Save and Print
        </button>
            </div>
        </div>      
    </div>      
          </div>
        </div>
    </Layout>
  )
}

export default Payment