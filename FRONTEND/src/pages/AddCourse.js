import React, { useEffect, useState } from 'react'
import Layout from '../components/Screens/Layout'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/auth/authSlice'
import axios from 'axios'
import { useParams } from 'react-router-dom';


const AddCourse = ({ props }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch])

  useEffect(() => {
    if (isError) {
      navigate("/")
    }
  }, [isError, navigate
  ])

  const [times, setTimes] = useState("");
  const [priceduration, setPriceduration] = useState(0)
  const [msg, setMsg] = useState("");




  const getTimes = async (e) => {  
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/time`, {
        number: parseInt(priceduration) ,
      });
      setTimes(response.data);
      //setPriceduration(response.data.length)
 
}

  useEffect(() => {
  getTimes();
  },[])

  const [subCourse, setSubCourse] = useState(false)
  const subcourse = () => {
    setSubCourse(!subCourse)
  }

  const [fullPrice, setFullPrice] = useState(true)
  const fullprice = () => {
    setFullPrice(!fullPrice)
  }
const pricess = []
console.log(pricess)
  return (
    <Layout>
      <div className='mt-10 ml-5'>
        <p className='font-bold text-3xl'>Course</p>
        <p className='text-gray-400 text-2xl'>Add New Course</p>
        <div className='bg-white h-full p-5  ml-1 mt-3 elevation'>
          <form >
            <div>
              <label className='text-xl font-bold'>Course name</label>
              <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50rem] p-2.5 "
                /* value={name}
                onChange={(e) => setName(e.target.value)}  */
                required
                />
              <div className='flex items-center mt-5'>
                <p className='text-lg font-medium text-gray-600 '>Create a Subcourse?</p>
                <input type="checkbox" onClick={subcourse} className="w-5 ml-5 h-5"/>
              </div>
              {subCourse && 
                <div className='mt-3'>
                  <label className='text-xl font-bold '>Subcourse name</label>
                  <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50rem] p-2.5 "
                  />
                </div>
              }
              <div className='mt-3'>
                <label className='text-xl font-bold '>Language</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50rem] p-2.5"
                /*  onChange={handleChange}
                  name="gender"
                  value={studentData["gender"] || ""} */
                >
                  <option></option>
                  <option value="male">English</option>
                  <option value="female">French</option>
                </select>
              </div>
              <div className='mt-3'>
                <label className='text-xl font-bold '>Class Type</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50rem] p-2.5"
                /*  onChange={handleChange}
                  name="gender"
                  value={studentData["gender"] || ""} */
                >
                  <option></option>
                  <option value="male">Group</option>
                  <option value="female">One-on-one</option>
                </select>
              </div>
              <div className='mt-3'>
                  <label className='text-xl font-bold '>Description</label>
                  <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50rem] p-2.5 "
                  />
                </div>
              <div className='flex items-center mt-5'>
                <p className='text-lg font-medium text-gray-600 '>Full Price ?</p>
                <input type="checkbox" defaultChecked onClick={fullprice} className="w-5 ml-5 h-5"/>
              </div>
              {fullPrice && 
                <>
                  <div className='mt-3'>
                      <label className='text-xl font-bold '>Price</label>
                      <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50rem] p-2.5 "
                        placeholder='00' 
                      />
                  </div>
                  <div className='mt-3'>
                    <label className='text-xl font-bold '>Duration</label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50rem] p-2.5 "
                      placeholder='00' 
                    />
                  </div>
                </>
              }
              {!fullPrice && 
                <>
                  <div className='mt-3'>
                    <label className='text-xl font-bold '>Duration (Weeks - Hour)</label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50rem] p-2.5 " 
                      
                      onKeyUpCapture={(e) =>  {getTimes(e); setPriceduration(e.target.value)}} 
                      required
                    />
                  </div>

                  <div className='mt-3'>
                  <label className='text-xl font-bold '>Price Table</label>
                    <table className="w-[40rem]">
                      <thead>
                        <tr  className=" border border-dark-purple bg-gray-200  text-gray-600 uppercase text-sm leading-normal">
                          <th className=" border border-dark-purple py-3 px-3 text-center">Week or Hour</th>
                          <th className=" border border-dark-purple py-3 px-3 text-center">Prices</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600  text-sm font-light">
                        { times.map((time, index) => (
                            <tr key={time.uuid} className=" border-gray-400  hover:bg-gray-100 border-b-2">
                            <td className="py-2 px-2  border border-dark-purple">
                              <div className="flex items-center justify-center">
                                <span className="font-bold text-xl uppercase">{time.time}</span>
                              </div>
                            </td>
                            <td className="  border border-dark-purple w-[20rem] h-12">
                              <div className="flex items-center justify-center  ">
                                <input className=" uppercase text-right w-[20rem] h-12 text-xl font-bold pr-2" placeholder="00"
                                  onChange= {(e)=> {pricess[index]=e.target.value}}
                                />
                              </div>
                            </td>
                          </tr>
                         ))} 
                      </tbody>
                    </table>
              </div>
                </>
              }
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default AddCourse