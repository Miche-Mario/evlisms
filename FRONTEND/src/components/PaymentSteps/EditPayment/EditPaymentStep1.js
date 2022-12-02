import React, { useEffect, useState, useContext } from 'react'
import { StepperContext } from '../../../contexts/stepperContext'
import { useParams } from 'react-router-dom'

import '../paymentstyle.css'
import axios from 'axios'
const AddPaymentStep1 = ({ click }) => {
  const [msg, setMsg] = useState("");



  /////////////////////////////////////////////////////////////GET INVOICE/////////////////////////////////////

  const [invoicedata, setInvoiceData] = useState()
  const [invoicecode, setInvoicecode] = useState()
  const [invoicedatatrue, setInvoicedatatrue] = useState(false)


  const { id } = useParams();

  const getPayment = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/paymentbyid/${id}`);
      response.data && setInvoiceData(response.data.invoice)
    
}

console.log(invoicedata)

  //////////////////////////////////SEND DATA //////////////////////////////

  const { studentData, setStudentData } = useContext(StepperContext)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value })
  }

/* 
  useEffect(() => {
    setStudentData({ ...studentData, invoicedata: invoicedata[0], prospectdata: prospectdata })
  }, [invoicedata, prospectdata]) */

  /////////////////////////////////////////////////////////////GET PAYMENT METHOD/////////////////////////////////////



  

  const [paymentmethod, setPaymentMethod] = useState([]);

  const getPaymentMethods = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/paymentmethod`);
    setPaymentMethod(response.data)
  }




 useEffect(() => {
  getPaymentMethods()
  getPayment()
 }, [])




  /////////////////////////////////////////////////////////////
  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }

  return (



    <>

      <div className='mt-3 h-full'>
       {/*  <div className=' ml-32 '>
          <div className='flex items-center ml-4 ' >
            <p className={`text-xl font-medium ${invoicedatatrue == true && "text-green-500"}`}>INVOICE ID</p>
            <input type='text' className={`ml-4 w-48 p-2 border ${invoicedatatrue == true && " text-2xl focus:border-green-500 border-green-500"} `}

              onKeyUpCapture={(e) => { getInvoiceData(e); setInvoicecode(e.target.value) }}
            />
          </div>
        </div>
 */}

        <div>
          <div className="containerr mt-3">

            <div className="body-sectionn">
         <div className='mt-3'>
                <div className='flex flex-row '>
                  <div className='text-xl font-medium'>Received from:</div>
                  {/* <div className='ml-4 font-bold text-xl uppercase'>{prospectdata && prospectdata.forenamesg} {prospectdata && prospectdata.surnameg}</div> */}
                </div>
                <p className='ml-[9.5rem] text-lg uppercase'>
                  {invoicedata && invoicedata.courselist.length > 0 && invoicedata.courselist[0].lesubcoursename}
                  {invoicedata && invoicedata.courselist.length > 0 && " ENGLISH PROGRAMS"}
                  {invoicedata && invoicedata.courselist.length > 1 && "WITH "}
                  {invoicedata && invoicedata.courselist.length > 1 && invoicedata.courselist[1].lesubcoursename}
                  {invoicedata && invoicedata.courselist.length > 1 && " PREPARATIONS"}
                  {invoicedata && invoicedata.courselist.length > 2 && " WITH " + invoicedata.courselist[2].laduration + " WEEKS COMPUTER LITERACY"}
                  {invoicedata && invoicedata.courselist.length > 0 && " WITH "}
                  {invoicedata && invoicedata.examlist.length > 0 && invoicedata.examlist[0].lexamname}
                  {invoicedata && invoicedata.accolist.length > 0 && " WITH " + invoicedata.accolist[0].acotimes + " WEEKS ACCOMODATION"}





                </p>
              </div>
              <br />
              <form onSubmit={click}>
                <table className="table-bordered">
                  <thead>
                    <tr>
                      <th className="ww-20">Quantity</th>
                      <th className="ww-32">Description</th>
                      <th className="ww-20">Unit Price</th>
                      <th className="ww-20">Line Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    invoicedata && invoicedata.registration.length >= 0 && invoicedata.registration.map((regis, index) => (
                        <tr key={index * (Math.random() * 3)}>
                          <td>1</td>
                          <td className="ww-32">{regis.registrationname}</td>
                          <td>{regis.lecurrency} {separator(regis.regir)}</td>
                          <td>{regis.lecurrency} {separator(regis.regir)}</td>
                        </tr>
                      ))

                    }

                    {
                    invoicedata &&  invoicedata.courselist.length >= 0 && invoicedata.courselist.map((course, index) => (
                        <tr key={index * (Math.random() * 3)}>
                          <td>1</td>
                          <td>{course.coursedescription}</td>
                          <td>{course.lecurrency} {separator(course.price)}</td>
                          <td>{course.lecurrency} {separator(course.price)}</td>
                        </tr>
                      ))

                    }

                    {
                      invoicedatatrue && invoicedata.examlist.length >= 0 && invoicedata.examlist.map((exam, index) => (
                        <tr key={index * (Math.random() * 3)}>
                          <td>1</td>
                          <td>{exam.examdescription}</td>
                          <td>{exam.lecurrency} {separator(exam.examprice)}</td>
                          <td>{exam.lecurrency} {separator(exam.examprice)}</td>
                        </tr>
                      ))

                    }

                    {
                      invoicedatatrue && invoicedata.purchaselist.length >= 0 && invoicedata.purchaselist.map((pur, index) => (
                        <tr key={index * (Math.random() * 3)}>
                          <td>1</td>
                          <td>{pur.purchasedescription}</td>
                          <td>{pur.lecurrency} {separator(pur.purchaseprice)}</td>
                          <td>{pur.lecurrency} {separator(pur.purchaseprice)}</td>
                        </tr>
                      ))

                    }
                    {
                      invoicedatatrue && invoicedata.accolist.length >= 0 && invoicedata.accolist.map((acco, index) => (
                        <tr key={index * (Math.random() * 3)}>
                          <td>{acco.acotimes}</td>
                          <td>{acco.accodescription}</td>
                          <td>{acco.lecurrency} {separator(acco.accoprice)}</td>
                          <td>{acco.lecurrency} {separator(acco.acotimes * acco.accoprice)}</td>
                        </tr>
                      ))

                    }

                    {
                      invoicedatatrue && invoicedata.otherlist.length >= 0 && invoicedata.otherlist.map((other, index) => (
                        <tr key={index * (Math.random() * 3)}>
                          <td>1</td>
                          <td>{other.otherfeedescription}</td>
                          <td>{other.lecurrency} {separator(other.otherfeeprice)}</td>
                          <td>{other.lecurrency} {separator(other.otherfeeprice)}</td>
                        </tr>
                      ))

                    }

                    <tr>
                      <td colspan="3" className="text-right">Subtotal:</td>
                      <td className='font-bold'> { invoicedata.currency.lecurrency} { separator(invoicedata && invoicedata.subtotal)}</td>
                    </tr>
                    <tr>
                      <td colspan="3" className="text-right">Discount:</td>
                      <td className='font-bold'> { invoicedata.currency.lecurrency} { !invoicedata.discount ?  invoicedata.discount  : "0,00"}</td>
                    </tr>
                    <tr>
                      <td colspan="3" className="text-right">Total:</td>
                      <td className='font-bold'> { invoicedata.currency.lecurrency} { separator(invoicedata && invoicedata.total)}</td>
                    </tr>
                    <tr>
                      <td colspan="3" className="text-right">Amount Paid 1st:</td>
                      <td className='font-bold flex justify-center items-center'>{invoicedatatrue && invoicedata.currency.lecurrency}
                        <input type="number" className='p-1 border ml-1 border-red text-red w-28 text-center text-bold'
                          onChange={handleChange}
                          name="firstpayed"
                          value={studentData["firstpayed"] || ""}
                          required
                        />

                      </td>
                    </tr>
                    {/*   <tr>
                    <td colspan="3" className="text-right">Amount Paid 2nd:</td>
                    <td className='font-bold flex justify-center items-center'>{invoicedatatrue && invoicedata[0].currency.lecurrency}
                      <input type="text" className=' p-1 text-red border-red border ml-1 w-28 text-center text-bold' 
                      
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" className="text-right">Balance:</td>
                    <td className='font-bold'> {invoicedatatrue && invoicedata[0].currency.lecurrency} 18,500</td>
                  </tr> */}
                  </tbody>
                </table>
                <br />
                <div className='flex flex-row items-center'>
                  <h3 className="heading">Payment Mode:</h3>
                  <select id="countries" className="ml-3 3bg-gray-50 mb-4   text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5"
                    required
                    onClick={(e)=> setPaymentMethod(e.target.value)}
                  >
                    <option></option>
                    {paymentmethod.map((pm, index) => (
                        <option value={pm.id}>{pm.paymentname}</option>
                    ))}
                  </select>


                </div>
                <div className='flex justify-end'>
                  <button

                    //  onClick={(e) => saveStudent(e)}
                    className=' w-48 bg-blue-400 text-white  uppercase py-2 px-4
                                rounded-xl font-semibold cursor-pointer  
                              hover:bg-blue-600 hover:text-white transition duration-200 ease-in-out '
                  >
                    Save
                  </button>
                </div>

              </form>

            </div>



          </div>
        </div>
      </div>
    </>
  )
}

export default AddPaymentStep1