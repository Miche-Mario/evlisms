import React, { useState, useEffect, useContext } from 'react'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { BsFillTrashFill } from "react-icons/bs"
import { StepperContext } from '../../../contexts/stepperContext'


const CoursesPurchasesExam = () => {

  const { studentData, setStudentData } = useContext(StepperContext)
  const handleChangee = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value, courseList })
  }

  useEffect(() => {
    const courseList = JSON.parse(localStorage.getItem('courseList'));
    if (courseList) {
     setCourseList(courseList);
    }
  }, []);


  const [options, setOptions] = useState()
  const [optionsAco, setOptionsAco] = useState()

  const [programId, setProgramId] = useState('')
  const [acoId, setAcoId] = useState('')

  const [view, setView] = useState(false)
  const [oneOnOne, setOneOnOne] = useState(false)


  const [courseList, setCourseList] = useState([{course: '', duration: ''}])

  const duration = []
  const duration1 = []


  for (let i = 0; i < 49; i++) {
    duration[i] = i + 1
  }

  for (let i = 0; i < 11; i++) {
    duration1[i] = i + 1
  }


  const changeOption = (e) => {
    setProgramId(e.target.value)
  }
  const changeOptionAco = (e) => {
    setAcoId(e.target.value)
  }



  const oneOnChange = () => {
    setOneOnOne(!oneOnOne)
  }

  const click = () => {
    if (programId == 1) {
      setOptions(general)
      setView(true)
    } else if (programId == 3) {
      setOptions(tests)
      setView(true)
    } else if (programId == 33) {
      setOptions('')
      setView(false)
    } else {
      setOptions('')
      setView(true)
    }
  }

  const clickAco = () => {
    if (acoId == 1) {
      setOptionsAco(acotype)

    } else if (acoId == 33) {
      setOptionsAco('')
    } else {
      setOptionsAco('')
    }
  }


  const programs = [
    {
      id: 1,
      label: "General English",
    },
    {
      id: 2,
      label: "Executive English",
    },
    {
      id: 3,
      label: "Test Preperation",
    },
    {
      id: 4,
      label: "Computer Literacy",
    },
    {
      id: 5,
      label: "Functional French",
    }

  ]


  const general = [
    {
      id: 1,
      label: "Regular",
    },
    {
      id: 2,
      label: "Intensive",
    },

  ]
  const tests = [
    {
      id: 1,
      label: "TOEFL",
    },
    {
      id: 2,
      label: "IELTS",
    },
    {
      id: 3,
      label: "TOEIC"
    },

  ]
  const purchases = [
    {
      id: 1,
      label: "T-Shirts",
    },
    {
      id: 2,
      label: "Books",
    },
    {
      id: 3,
      label: "Penalties"
    },

  ]
  const accomodation = [
    {
      id: 1,
      label: "Blue Hostel",
    }

  ]

  const acotype = [
    {
      id: 1,
      label: "Single"
    },
    {
      id: 2,
      label: "Twin"
    }
  ]


  const addCourse = () => {
    setCourseList([...courseList, {course: '', duration: ''}])  
  }
  const removeClick = (index) => {
    const list = [...courseList];
    list.splice(index, 1);
    setCourseList(list)
  }

  const handleCourseChange= (e,index) => {
    const {name,value} = e.target;
    const list = [...courseList];
    list[index][name] = value;
    setCourseList(list);
  }
 console.log(studentData)
  return (
    <div>
      {
        courseList.map((oneCourse, index) => (
          <div key={index} className='m-5'>
            <div className='flex'>
              <div>
              <p className='text-lg font-bold text-gray-600 '>CHOOSE A COURSE</p>

              <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 
        focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 
        dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e)=>{changeOption(e);handleChangee(e);handleCourseChange(e,index)}}
                onClick={click}
                name="course"
                >
                <option value="33" className='text-md'>Our programme</option>
                {programs.map((program) => (
                  <option className='text-xl' value={program.id}>{program.label}</option>
                ))}
              </select>
              </div>
              <div>
                {courseList.length > 1 && 
                 <button
                  onClick={removeClick}
                  className=' mt-7 ml-3 border-red-200 justify-between flex rounded-md p-1 border-2'>
                  <BsFillTrashFill size={26} color="red" />
                  <span className=' text-lg ml-2  text-red font-medium'>Remove</span>
                </button>}
              </div>
            </div>
            {options &&
              <div className='m-5'>

                <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 
          focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 
        dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                  {options.map((option) => (
                    <option value={option.id}>{option.label}</option>
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
         onChange={(e)=>{changeOption(e);handleChangee(e);handleCourseChange(e,index)}}
          name="duration"
         >
                  {duration.map((option) => (
                    <option value={option.id}>{option} weeks</option>
                  ))}
                </select>
              </div>}
            </div>

            {
              view && courseList.length - 1 === index && courseList.length < 4 &&

              <button
                onClick={addCourse}
                className='border-blue-200 justify-between flex rounded-md p-1 border-2'>
                <AiOutlineAppstoreAdd size={26} color="green" />
                <span className=' ml-2 text-lg text-green-600 font-medium'> Add a course</span>
              </button>}
          </div>
        ))
      }






      {view && <div className='m-5'>
        <p className='text-lg font-medium text-gray-600 '>Would you like to book additional one-on-one classes?</p>
        <input type="checkbox" className="w-5 h-5 mt-3" 
        value={studentData["oneOnOnecp"] || ""}
        name="oneOnOne1cp"
        onChange={(e)=>{oneOnChange();handleChangee(e)}} />
        
      </div>}

      {oneOnOne && <div className='m-5'>
        <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
         value={studentData["oneOnOne1cp"] || ""}
         name="oneOnOne1cp"
        onChange={handleChangee} 
         >
          {duration1.map((option) => (
            <option value={option.id}>{option} Private lesson</option>
          ))}
        </select>
      </div>}

      {view && <div className='m-5'>
        <p className='text-lg font-medium text-gray-600 '>Exam</p>
        <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
         value={studentData["exam"] || ""}
         name="examcp"
        onChange={handleChangee} 
         >
          {tests.map((option) => (
            <option value={option.id}>{option.label}</option>
          ))}
        </select>
      </div>}

      {view && <div className='m-5'>
        <p className='text-lg font-medium text-gray-600 '>Purchases</p>
        <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
         
         value={studentData["purchasecp"] || ""}
         name="purchasecp"
        onChange={handleChangee} 
         >
          {purchases.map((option) => (
            <option value={option.id}>{option.label}</option>
          ))}
        </select>
      </div>}

      {view && <div className='m-5'>
        <p className='text-lg font-medium text-gray-600 '>Accomodation</p>
        <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 
        focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 
        dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         value={studentData["aco"] || ""} 
          onChange={(e)=>{changeOptionAco(e);handleChangee(e)}}
          onClick={clickAco}
          name="aco">
          
          <option value="33" className='text-md'>Our accomadation</option>
          {accomodation.map((program) => (
            <option className='text-xl' key={program.id} value={program.id}>{program.label}</option>
          ))}
        </select>
      </div>}

      {optionsAco &&
        <div className='m-5'>

          <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 
          focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 
        dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
         value={studentData["aco1"] || ""} 
         onChange={handleChangee}
         name="aco1"
         >
            <option value="33" className='text-md'>Our accomodations</option>
            {optionsAco.map((option) => (
              <option value={option.id}>{option.label}</option>
            ))}
          </select>
        </div>
      }


    </div>

  )
}

export default CoursesPurchasesExam