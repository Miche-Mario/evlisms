import React, { useState, useEffect, useContext } from 'react'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { BsFillTrashFill } from "react-icons/bs"
import { StepperContext } from '../../../contexts/stepperContext'
import { BiTrash } from 'react-icons/bi'
import { MdOutlineAddToPhotos } from 'react-icons/md'
import axios from 'axios'


const CoursesPurchasesExam = () => {

  const { studentData, setStudentData } = useContext(StepperContext)
  const handleChangee = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value })
  }
  const [msg, setMsg] = useState("");

  //GET ALL EXMAS
  const [exam, setExams] = useState([]);
  const [examid, setExamId] = useState();
  const [examprice, setExamPrice] = useState();
  const getExams = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/exam`);
    setExams(response.data)
  }

  const getExamPrice = async (e) => {

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/exam`, {
        examid: parseInt(examid)
      });

      setExamPrice(response.data.examprice)
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        console.log(msg)
      }
    }
  }

  // GET ALL ACCOMODATIONS
  const [accomodation, setAccomodation] = useState([]);
  const [accoid, setAccoId] = useState();
  const [accoprice, setAccoPrice] = useState();
  const getAccomodaion = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/accomodations`);
    setAccomodation(response.data)
  }


  const getAccoPrice = async (e) => {

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/accomodation`, {
        accoid: parseInt(accoid)
      });

      setAccoPrice(response.data.accomodationprice)
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        console.log(msg)
      }
    }
  }

  // GET ALL ITEMS
  const [item, setItems] = useState([]);
  const [purchaseid, setPurchaseId] = useState();
  const [purchaseprice, setPurchasePrice] = useState();
  const getItems = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/purchases`);
    setItems(response.data)
  }

  const getPurchasePrice = async (e) => {

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/purchase`, {
        purchaseid: parseInt(purchaseid)
      });

      setPurchasePrice(response.data.purchaseprice)
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        console.log(msg)
      }
    }
  }

  // GET ALL COURSE
  const [course, setCourse] = useState([]);
  const getCourse = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/course`);
    setCourse(response.data)
  }


  const [options, setOptions] = useState(null);
  const [optionid, setOptionId] = useState(null);
  const getCourseSubcourse = async (e) => {

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/getsubcourse`, {
        courseid: programId,
      });
      setOptions(response.data)
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }
  //GET ALL TIMES
  const [times, setTimes] = useState([]);
  const getTimes = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/times`);
    setTimes(response.data)
  }
  // GET ALL COURSES
  const [price, setPrice] = useState();

  const getCoursesPrice = async (e) => {

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/getcoursesprice`, {
        courseid: parseInt(programId),
        subcourseid: parseInt(optionid),
        duration: parseInt(laduration)
      });
      response.data.price ? setPrice(response.data.price) : setPrice(response.data.fullprice)
      response.data.fullduration && setLaDuration(response.data.fullduration)
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        console.log(msg)
      }
    }
  }

  /*    useEffect(() => { // useEffect hook
       setTimeout(() => { // simulate a delay
  
        
        }, 1000);
       }, []);  */

  useEffect(() => {
    getExams();
    getAccomodaion();
    getItems();
    getCourse();
    getCourseSubcourse();
    getTimes()
  }, [])


  const [programId, setProgramId] = useState(null)


  const [view, setView] = useState(false)
  const [oneOnOne, setOneOnOne] = useState(false)







  const changeOption = (e) => {
    setProgramId(e.target.value)

  }
  const click = () => {
    if (programId == 33) {
      setView(false)
    } else {
      setView(true)
    }
  }



  const oneOnChange = () => {
    setOneOnOne(!oneOnOne)
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
  const [lecoursename, setLeCoursename] = useState('')
  const [lesubcoursename, setLeSubcoursename] = useState('')
  const [lexamname, setLexamName] = useState('')
  const [lepurchasename, setLePurchaseName] = useState('')
  const [lacconame, setLacconame] = useState('')

  const [laduration, setLaDuration] = useState(null)

  const [courseList, setCourseList] = useState(getCourseDataFromLS())
  const [examList, setExamList] = useState(getExamDataFromLS())
  const [purchaseList, setPurchaseList] = useState(getPurchaseDataFromLS())
  const [accoList, setAccoList] = useState(getAccoDataFromLS())


  const addCourse = (e) => {
    e.preventDefault(e);
    const uuid = Math.random() + 89
    let acourse = {
      lecoursename,
      lesubcoursename,
      laduration,
      price,
      uuid
    }
    setCourseList([...courseList, acourse]);
    setOptionId(null)
    setOptionId(null)
    setLeSubcoursename(null)

  }

  const addExam = (e) => {
    e.preventDefault(e);
    const uuid = Math.random() + 89
    let anexam = {
      lexamname,
      examprice,
      uuid
    }
    setExamList([...examList, anexam]);
  }

  const addAcco = (e) => {
    e.preventDefault(e);
    const uuid = Math.random() + 89
    let anacco = {
      lacconame,
      accoprice,
      uuid
    }
    setAccoList([...accoList, anacco]);
  }
  const addPurchase = (e) => {
    e.preventDefault(e);
    const uuid = Math.random() + 89
    let apurchase = {
      lepurchasename,
      purchaseprice,
      uuid
    }
    setPurchaseList([...purchaseList, apurchase]);
  }

  useEffect(() => {
    localStorage.setItem('courseList', JSON.stringify(courseList))
  }, [courseList])

  useEffect(() => {
    localStorage.setItem('examList', JSON.stringify(examList))
  }, [examList])

  useEffect(() => {
    localStorage.setItem('accoList', JSON.stringify(accoList))
  }, [accoList])

  useEffect(() => {
    localStorage.setItem('purchaseList', JSON.stringify(purchaseList))
  }, [purchaseList])




  const deleteCourseFromList = (param) => {
    const filterr = courseList.filter((element, index) => {
      return element.uuid !== param;
    })
    setCourseList(filterr)
    console.log(filterr)
  }
  const deleteExamFromList = (param) => {
    const filterr = examList.filter((element, index) => {
      return element.uuid !== param;
    })
    setExamList(filterr)

  }

  const deleteAccoFromList = (param) => {
    const filterr = accoList.filter((element, index) => {
      return element.uuid !== param;
    })
    setAccoList(filterr)

  }

  const deletePurchaseFromList = (param) => {
    const filterr = purchaseList.filter((element, index) => {
      return element.uuid !== param;
    })
    setPurchaseList(filterr)

  }
  const handleChangeCourse = () => {
    var lecourse = document.getElementById("lecourse");
    var selectedText = lecourse.options[lecourse.selectedIndex].innerHTML;
    var selectedValue = lecourse.value;
    setLeCoursename(selectedText);
    setProgramId(selectedValue)

  }
  const handleChangeSubCourse = () => {
    var lesubcourse = document.getElementById("lesubcourse");
    var selectedText = lesubcourse.options[lesubcourse.selectedIndex].innerHTML;
    var selectedValue = lesubcourse.value;
    setLeSubcoursename(selectedText);

  }
  const handleChangeExam = () => {
    var lexam = document.getElementById("lexam");
    var selectedText = lexam.options[lexam.selectedIndex].innerHTML;
    var selectedValue = lexam.value;
    setLexamName(selectedText);

  }
  const handleChangeAcco = () => {
    var lacco = document.getElementById("lacco");
    var selectedText = lacco.options[lacco.selectedIndex].innerHTML;
    var selectedValue = lacco.value;
    setLacconame(selectedText);
  }
  const handleChangePurchase = () => {
    var lepurchase = document.getElementById("lepurchase");
    var selectedText = lepurchase.options[lepurchase.selectedIndex].innerHTML;
    var selectedValue = lepurchase.value;
    setLePurchaseName(selectedText);
  }
  console.log(purchaseprice)
  return (
    <div className='flex flex-row w-full'>
      <div>



        <div className='m-5'>
          <div className='flex'>
            <div>
              <p className='text-lg font-bold text-gray-600 '>CHOOSE A COURSE</p>

              <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 
                                focus:ring-blue-500focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 
                                dark:placeholder-gray-400dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => { changeOption(e); handleChangee(e); handleChangeCourse() }}
                onClick={() => { getCourseSubcourse(); click() }}
                name="coursee"
                id='lecourse'
              >
                <option value="33" className='text-md' >Our programme</option>
                {course.map((course) => (
                  <option className='text-xl' value={course.id}>{course.coursename}</option>
                ))}
              </select>
            </div>

          </div>
          {options && options.length > 1 &&
            <div className='m-5'>

              <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 
                                focus:ring-blue-500 
                                focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 
                                dark:placeholder-gray-400
                                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => { setOptionId(e.target.value); handleChangeSubCourse() }}
                id='lesubcourse'
              >
                <option></option>
                {options.map((option) => (
                  <option value={option.subcourse.id}>{option.subcourse.subcoursename}</option>
                ))}
              </select>

            </div>
          }



          <div>
            {view && <div className='m-5'>
              <p className='text-lg font-medium text-gray-600 '>DURATION</p>
              <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setLaDuration(e.target.value)}
                onClick={getCoursesPrice}
                name="durationn"
              >
                <option></option>
                {times.map((option) => (
                  <option value={option.id}>{option.time}</option>
                ))}
              </select>
              <button
                onClick={addCourse}
                className='mt-4 border-blue-200 justify-between flex rounded-md p-1 border-2'>
                <MdOutlineAddToPhotos size={26} color="green" />
                <span className=' ml-2 text-lg text-green-600 font-medium'> Add a course</span>
              </button>
            </div>

            }
          </div>




        </div>








        {view && <div className='m-5'>
          <p className='text-lg font-medium text-gray-600 '>Would you like to book additional one-on-one classes?</p>
          <input type="checkbox" className="w-5 h-5 mt-3"
            value={studentData["oneOnOnecp"] || ""}
            name="oneOnOne1cp"
            onChange={(e) => { oneOnChange(); handleChangee(e) }} />

        </div>}

        {oneOnOne && <div className='m-5'>
          <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={studentData["oneOnOne1cp"] || ""}
            name="oneOnOne1cp"
            onChange={handleChangee}
          >
            {times.map((option) => (
              <option value={option.id}>{option} Private lesson</option>
            ))}
          </select>
        </div>}

        {view && <div className='m-5'>

          <p className='text-lg font-medium text-gray-600 '>Exam</p>
          <div className='flex flex-row items-center'>
            <div>
              <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="lexam"
                onChange={(e) => { handleChangeExam(); setExamId(e.target.value) }}
                onClick={getExamPrice}
              >
                <option value="" className='text-md'></option>
                {exam.map((exam) => (
                  <option value={exam.id}>{exam.examname}</option>
                ))}
              </select>
            </div>
            <div className=' cursor-pointer' onClick={addExam}>
              <MdOutlineAddToPhotos style={{ fontSize: "45px", color: "green" }} />
            </div>

          </div>
        </div>}

        {view && <div className='m-5'>
          <p className='text-lg font-medium text-gray-600 '>Purchases</p>
          <div className='flex flex-row items-center'>
            <div>
              <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="lepurchase"
              onChange={(e) => { handleChangePurchase(); setPurchaseId(e.target.value) }}
              onClick={getPurchasePrice}
              >
                <option value="" className='text-md'></option>
                {item.map((item) => (
                  <option value={item.id}>{item.purchasename}</option>
                ))}
              </select>
            </div>
            <div className=' cursor-pointer' onClick={addPurchase}>
              <MdOutlineAddToPhotos style={{ fontSize: "45px", color: "green" }} />
            </div>

          </div>
        </div>}

        {view && <div className='m-5'>
          <p className='text-lg font-medium text-gray-600 '>Accomodation</p>
          <div className='flex flex-row items-center'>
            <div>
              <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 
        focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 
        dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="lacco"
                onChange={(e) => { handleChangeAcco(); setAccoId(e.target.value) }}
                onClick={getAccoPrice}
              >

                <option value="" className='text-md'></option>
                {accomodation.map((acco) => (
                  <option className='text-xl' value={acco.id}>{acco.accomodationname}</option>
                ))}
              </select>
            </div>
            <div className=' cursor-pointer' onClick={addAcco}>
              <MdOutlineAddToPhotos style={{ fontSize: "45px", color: "green" }} />
            </div>

          </div>
        </div>}




      </div>


      <div className='ml-32 mt-12 w-full'>
        {
          courseList.length > 0 &&
          <div>


            <table class="min-w-full shadow-lg border-collapse block md:table">
              <thead class="block md:table-header-group">
                <tr class="border border-gray-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                  <th class=" bg-dark-purple p-2 w-10 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">N</th>
                  <th class="bg-dark-purple w-48 p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Course </th>
                  <th class="bg-dark-purple p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Subcourse </th>
                  <th class="bg-dark-purple p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Duration</th>
                  <th class="bg-dark-purple p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Price</th>
                  <th class="bg-dark-purple p-2 w-32 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Actions</th>
                </tr>
              </thead>
              <tbody class="block md:table-row-group">
                {courseList.map((course, index) => (
                  <tr class="bg-gray-300 border-b-2 block md:table-row">
                    <td class="p-3 w-10  text-center font-medium block md:table-cell">{index + 1}</td>
                    <td class="p-3 w-48 text-center font-medium block md:table-cell">{course.lecoursename}</td>
                    <td class="p-3 text-center font-medium block md:table-cell">{course.lesubcoursename}</td>
                    <td class="p-3 text-center font-medium block md:table-cell">{course.laduration}</td>
                    <td class="p-3 text-center font-medium block md:table-cell">{course.price}</td>
                    <td class="p-3 w-32 text-center font-medium block md:table-cell">
                      <div onClick={() => deleteCourseFromList(course.uuid)} className=' cursor-pointer flex items-center p-2 shadow-md bg-white rounded-md'>
                        <BiTrash style={{ fontSize: "20px", color: 'red' }} />
                        <span className='ml-1 text-sm text-black'>Delete</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='mb-3 justify-end flex m-2'>
            <button onClick={()=>setCourseList([])} className='justify-center flex items-center cursor-pointer p-1 shadow-lg rounded-lg font-semibold bg-redd text-white w-64'>Remove All</button>
          </div>

          </div>

        }
          


        <div>
          {
            examList.length > 0 && <>

            <table class="min-w-full shadow-lg border-collapse block md:table">
              <thead class="block md:table-header-group">
                <tr class="border border-gray-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                  <th class=" bg-dark-purple p-2 w-10 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">N</th>
                  <th class="bg-dark-purple p-2 w-48 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Exam </th>
                  <th class="bg-dark-purple p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Price</th>
                  <th class="bg-dark-purple p-2 w-32 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Actions</th>
                </tr>
              </thead>
              <tbody class="block md:table-row-group">
                {examList.map((exam, index) => (
                  <tr class="bg-gray-300 border-b-2 block md:table-row">
                    <td class="p-3 w-10  text-center font-medium block md:table-cell">{index + 1}</td>
                    <td class="p-3 w-48 text-center font-medium block md:table-cell">{exam.lexamname}</td>
                    <td class="p-3 text-center font-medium block md:table-cell">{exam.examprice}</td>
                    <td class="p-3 w-32 text-center font-medium block md:table-cell">
                      <div onClick={() => deleteExamFromList(exam.uuid)} className=' cursor-pointer flex items-center p-2 shadow-md bg-white rounded-md'>
                        <BiTrash style={{ fontSize: "20px", color: 'red' }} />
                        <span className='ml-1 text-sm text-black'>Delete</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='mb-3 justify-end flex items-center m-2'>
            <button onClick={()=>setExamList([])} className=' justify-center flex items-center cursor-pointer p-1 shadow-lg rounded-lg font-semibold bg-redd text-white w-64'>Remove All</button>
            </div>
            </>
          }
        </div>
        <div>
          { 
            purchaseList.length > 0 && <>
            <table class="min-w-full shadow-lg border-collapse block md:table">
              <thead class="block md:table-header-group">
                <tr class="border border-gray-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                  <th class=" bg-dark-purple p-2 w-10 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">N</th>
                  <th class="bg-dark-purple p-2 w-48 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Purchase </th>
                  <th class="bg-dark-purple p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Price</th>
                  <th class="bg-dark-purple p-2 w-32 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Actions</th>
                </tr>
              </thead>
              <tbody class="block md:table-row-group">
                {purchaseList.map((purchase, index) => (
                  <tr class="bg-gray-300 border-b-2 block md:table-row">
                    <td class="p-3 w-10  text-center font-medium block md:table-cell">{index + 1}</td>
                    <td class="p-3 w-48 text-center font-medium block md:table-cell">{purchase.lepurchasename}</td>
                    <td class="p-3 text-center font-medium block md:table-cell">{purchase.purchaseprice}</td>
                    <td class="p-3 w-32 text-center font-medium block md:table-cell">
                      <div onClick={() => deletePurchaseFromList(purchase.uuid)} className=' cursor-pointer flex items-center p-2 shadow-md bg-white rounded-md'>
                        <BiTrash style={{ fontSize: "20px", color: 'red' }} />
                        <span className='ml-1 text-sm text-black'>Delete</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='mb-3 justify-end flex items-center m-2'>
            <button onClick={()=>setPurchaseList([])} className=' justify-center flex items-center cursor-pointer p-1 shadow-lg rounded-lg font-semibold bg-redd text-white w-64'>Remove All</button>
            </div>
            </>
          }
        </div>

        <div>
          {
            accoList.length > 0 && <>
            <table class="min-w-full shadow-lg border-collapse block md:table">
              <thead class="block md:table-header-group">
                <tr class="border border-gray-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                  <th class=" bg-dark-purple p-2 w-10 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">N</th>
                  <th class="bg-dark-purple p-2 w-48 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Accomodation </th>
                  <th class="bg-dark-purple p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Price</th>
                  <th class="bg-dark-purple p-2 w-32 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Actions</th>
                </tr>
              </thead>
              <tbody class="block md:table-row-group">
                {accoList.map((acco, index) => (
                  <tr class="bg-gray-300 border-b-2 block md:table-row">
                    <td class="p-3 w-10  text-center font-medium block md:table-cell">{index + 1}</td>
                    <td class="p-3 w-48 text-center font-medium block md:table-cell">{acco.lacconame}</td>
                    <td class="p-3 text-center font-medium block md:table-cell">{acco.accoprice}</td>
                    <td class="p-3 w-32 text-center font-medium block md:table-cell">
                      <div onClick={() => deleteAccoFromList(acco.uuid)} className=' cursor-pointer flex items-center p-2 shadow-md bg-white rounded-md'>
                        <BiTrash style={{ fontSize: "20px", color: 'red' }} />
                        <span className='ml-1 text-sm text-black'>Delete</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className=' justify-end flex items-center m-2'>
            <button onClick={()=>setAccoList([])} className=' justify-center flex items-center cursor-pointer p-1 shadow-lg rounded-lg font-semibold bg-redd text-white w-64'>Remove All</button>
            </div>
            </>
          }
        </div>

       



      </div>





    </div>

  )
}

export default CoursesPurchasesExam