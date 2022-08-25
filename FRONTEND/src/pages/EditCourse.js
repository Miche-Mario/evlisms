import React, { useEffect, useState } from 'react'
import Layout from '../components/Screens/Layout'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/auth/authSlice'
import axios from 'axios'
import { useParams } from 'react-router-dom';


const EditCourse = ({ props }) => {

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

  const [coursename, setCoursename] = useState("");
  const [subcourse, setSubCoursename] = useState("");
  const [courselanguage, setCourselanguage] = useState("");
  const [courseclasstype, setCourseclasstype] = useState("");
  const [coursedescription, setCourseDescription] = useState("");
  const [coursefullduration, setCoursefullduration] = useState("");
  const [coursefullprice, setCoursefullprice] = useState("");
  const [courseactive, setCourseactive] = useState("");


  const [fullduration, steFullduration] = useState("");
  const [full, setFull] = useState("");




  const [languages, setLanguages] = useState([]);

  const getLanguages = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/language`);
    setLanguages(response.data)
  }


  const [classtypes, setClasstypes] = useState([]);

  const getClasstypes = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/classtype`);
    setClasstypes(response.data)
  }

  const [msg, setMsg] = useState("");



  const { id } = useParams();
  const getCourse = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/courses/${id}`);
    setCoursename(response.data.course.coursename);
    response.data.subcourse && setSubCoursename(response.data.subcourse.subcoursename);
    setCourseclasstype(response.data.classtype.classtypename);
    setCourselanguage(response.data.language.languagename);
    setCourseDescription(response.data.description);
    setCoursefullduration(response.data.fullduration);
    setCourseDescription(response.data.description);
    setCourseactive(response.data.active);
    setCoursefullprice(response.data.fullprice);
  }

  const [pricestimes, setPricestimes] = useState([]);
  const getPricesTimes = async() => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/prices/${id}`);
    setPricestimes(response.data);
  }

  console.log(pricestimes)
 


  useEffect(() => {
    getCourse();
    getLanguages()
    getClasstypes();
    getPricesTimes();
  },[])

  const [course, setCourse] = useState('');
  const [subCource, setSubCourse] = useState('');
  const [description, setDescription] = useState('');
  const [classtype, setClasstype] = useState('');
  const [fullprice, setFullprice] = useState('');
  const [language, setLanguage] = useState('');



  // const saveCourses = async (e) => {
  //   var keyCode = e.keyCode || e.which;
  // if (keyCode !== 13) { 
  //   e.preventDefault();
  //   try {
  //     await axios.post(`${process.env.REACT_APP_BASE_URL}/courses`, {
  //       coursename: course,
  //       subcoursename: subCource,
  //       language_languageid: language,
  //       classtype_classtypeid: classtype,
  //       description: description,
  //       fullprice: fullprice,
  //       fullduration: fullduration,
  //       times: times,
  //       prices: getPrices
        
  //     });
  //     navigate(0);
  //   } catch (error) {
  //     if (error.response) {
  //       setMsg(error.response.data.msg);
  //     }
  //   }
  // }}











  const [ifSubCourse, setIfSubCourse] = useState(false)
  const ifsubcourse = () => {
    setIfSubCourse(!ifSubCourse)
  }

 
  const getPrices = [];

  const [ifFullPrice, setIfFullPrice] = useState(false)
  const iffullprice = () => {
    setIfFullPrice(!ifFullPrice)
  }

  return (
    <Layout>
      <div className='mt-10 ml-5'>
        <p className='font-bold text-3xl'>Course</p>
        <p className='text-gray-400 text-2xl'>Edit Course</p>
        <div className='bg-white h-full p-5  ml-1 mt-3 elevation'>
          <form >
            <div className='flex items-start justify-around'>
              <div>
              <label className='text-xl font-bold'>Course name</label>
              <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50rem] p-2.5 "
                value={coursename}
                onChange={(e) => setCoursename(e.target.value)} 
                required
                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                />
              <div className='flex items-center mt-5'>
                <p className='text-lg font-medium text-gray-600 '>Create a Subcourse?</p>
                <input type="checkbox" onClick={ifsubcourse} className="w-5 ml-5 h-5"
                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                />
              </div>
              {ifSubCourse && 
                <div className='mt-3'>
                  <label className='text-xl font-bold '>Subcourse name</label>
                  <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50rem] p-2.5 "
                    value={subcourse}
                    onChange={(e) => setSubCourse(e.target.value)} 
                    required
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                  />
                </div>
              }
              <div className='mt-3'>
                <label className='text-xl font-bold '>Language</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50rem] p-2.5"
                value={courselanguage}
                onChange={(e) => setCourselanguage(e.target.value)} 
                required
                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                >
                  {languages.map((language, index) => (
                      language.languagename === course.courselanguage ?
                      <option value={language.id} selected>{language.languagename}</option>
                      : <option value={language.id} >{language.languagename}</option>
                  ))} 
                  
                </select>
              </div>
              <div className='mt-3'>
                <label className='text-xl font-bold '>Class Type</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50rem] p-2.5"
                  value={courseclasstype}
                  onChange={(e) => setCourseclasstype(e.target.value)} 
                  required
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                >
            
                  { classtypes.map((classtype, index) => (
                    classtype.classtypename === course.courseclasstype ?
                      <option value={classtype.id} selected>{classtype.classtypename}</option>
                      : <option value={classtype.id} >{classtype.classtypename}</option>

                  ))}
                </select>
              </div>
              <div className='mt-3'>
                  <label className='text-xl font-bold '>Description</label>
                  <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50rem] p-2.5 "
                    value={coursedescription}
                    onChange={(e) => setCourseDescription(e.target.value)} 
                    required
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                  />
                </div>
              
              {coursefullprice !== 0  && 
                <>
                  
                  <div className='mt-3'>
                    <label className='text-xl font-bold '>Duration</label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50rem] p-2.5 "
                      placeholder='00'
                      value={coursefullduration}
                      onChange={(e) => steFullduration(e.target.value)} 
                      required={ifFullPrice ? true : false}  
                      onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    />
                  </div>
                  <div className='mt-3'>
                      <label className='text-xl font-bold '>Price</label>
                      <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50rem] p-2.5 "
                        placeholder='00'
                        value={coursefullprice}
                        onChange={(e) => setCoursefullprice(e.target.value)}
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                      />
                  </div>
                </>
              }
              </div>
              <div>
           
              { coursefullprice === 0 && 
                <>
                  <div className='mt-3'>
                    <label className='text-xl font-bold '>Duration (Weeks - Hour)</label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30rem] p-2.5 " 
                      onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                     // onKeyUpCapture={(e) =>  {getTimes(e); setPriceduration(e.target.value)}} 
                     value={coursefullduration}
                     onChange={(e) => setCoursefullduration(e.target.value)} 
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
                        
                      { pricestimes.map((time, index) => (  <tr  className=" border-gray-400  hover:bg-gray-100 border-b-2">
                            <td className="py-2 px-2  border border-dark-purple">
                              <div className="flex items-center justify-center">
                                <span className="font-bold text-xl uppercase">{time.time.time}</span>
                              </div>
                            </td>
                            <td className="  border border-dark-purple w-[20rem] h-12">
                              <div className="flex items-center justify-center  ">
                                <input className=" uppercase text-right w-[20rem] h-12 text-xl font-bold pr-2" placeholder="00"
                                  value={time.price}
                                  // onChange= {(e)=> {getPrices[index]=e.target.value}}
                                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                />
                              </div>
                            </td>
                          </tr>))  }
                        
                      </tbody>
                    </table>
              </div>
                </>
              }
              </div>
            </div>
            <div className='flex flex-row justify-around  mt-3 mb-3'>
              <button className='bg-blue-600 rounded text-gray-100 font-medium w-20 h-10 flex items-center justify-center' type="submit">
                Save
              </button>
              <button className='bg-blue-600 rounded text-gray-100 font-medium w-20 h-10 flex items-center justify-center'>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default EditCourse