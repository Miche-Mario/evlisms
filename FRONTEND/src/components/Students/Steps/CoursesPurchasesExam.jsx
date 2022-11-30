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
  const [exampriceid, setExamPriceId] = useState()
  const [examprice, setExamPrice] = useState();
  const getExams = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/exam`);
    setExams(response.data)
  }


  const getCurrencyDataFromLS = () => {
    const data = localStorage.getItem('currency');
    if (data) {
      return JSON.parse(data)
    } else {
      return []
    }
  }
  const [currency, setCurrency] = useState(getCurrencyDataFromLS())

  const [currencyvalue, setCurrencyValue] = useState(currency.length !== 0 ? currency.currencyvalue : 1);
  const [lecurrency, setLecurrency ] = useState(currency.length !== 0 ? currency.lecurrency : "XOF");




  
 

  const getExamPrice = async (e) => {

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/examprice`, {
        examid: parseInt(examid)
      });
      setExamPriceId(response.data.id)
      setExamDescription(response.data.description)
      setExamPrice(response.data.examprice * currencyvalue)
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
  const [accopriceid, setAccoPriceId] = useState();

  const [accoprice, setAccoPrice] = useState();
  const getAccomodaion = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/accomodations`);
    setAccomodation(response.data)
  }


  const getAccoPrice = async (e) => {

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/accomodationprice`, {
        accoid: parseInt(accoid)
      });
      setAccoPriceId(response.data.id)
      setAccoDescription(response.data.description)
      setAccoPrice(response.data.accomodationprice * currencyvalue)
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        console.log(msg)
      }
    }
  }



    // GET ALL Other Fee
    const [otherfee, setOtherFee] = useState([]);
    const [otherFeeId, setOtherFeeId] = useState();
    const [otherFeePriceId, setOtherFeePriceId] = useState()
    const [otherfeeprice, setOtherFeeprice] = useState();
    const getOtherFee = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/otherfee`);
      setOtherFee(response.data)
    }
  
  
    const getOtherFeePrice = async (e) => {
  
      try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/otherfeeprice`, {
          otherFeeId: parseInt(otherFeeId)
        });
        setOtherFeePriceId(response.data.id)
        setOtherFeeDescription(response.data.description)
        setOtherFeeprice(response.data.feeprice * currencyvalue)
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
  const [purchasepriceid, setPurchasePriceId] = useState();
  const [purchaseprice, setPurchasePrice] = useState();
  const getItems = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/purchases`);

    setItems(response.data)
  }

  const getPurchasePrice = async (e) => {

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/purchaseprice`, {
        purchaseid: parseInt(purchaseid)
      });
      setPurchasePriceId(response.data.id)
      setPurchaseDescription(response.data.description)
      setPurchasePrice(response.data.purchaseprice * currencyvalue)
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        console.log(msg)
      }
    }
  }

  const [registrationprice, setRegistrationprice] = useState(0);
  const [registrationname, setRegistrationname] = useState();
  const [registrationid, setRegistrationid] = useState();

  
const getRegistration = async () => {
const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/registration`);
    setRegistrationid(response.data[0].id) 
    setRegistrationprice(response.data[0].registrationprice )
    setRegistrationname(response.data[0].registrationname)

  }
  



  // GET ALL COURSE
  const [course, setCourse] = useState([]);
  const getCourse = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/course`);
    setCourse(response.data)
    const surnameg = surnameg;


  }
  const surnameg = studentData.surnameg;
  const forenamesg = studentData.forenamesg
  const studInfo = {surnameg, forenamesg}
  localStorage.setItem('studInfo', JSON.stringify(studInfo))

  
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
  const [priceid, setPriceId] = useState();
  const [startdate, enddate] = useState();
  const [enddtae, setEndDate] = useState()


  const getCoursesPrice = async (e) => {

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/getcoursesprice`, {
        courseid: parseInt(programId),
        subcourseid: parseInt(optionid),
        duration: parseInt(laduration)
      });
      response.data.response ?  setPriceId(response.data.response.id) : setPriceId(response.data.id)
      response.data.response ?  setPrice(response.data.response.price * currencyvalue) : setPrice(response.data.fullprice * currencyvalue)
      response.data.fullprice &&  setPrice(response.data.fullprice * currencyvalue)
      response.data.fullduration && setLaDuration(response.data.fullduration)
      response.data.description && setCourseDescription(response.data.description)
  
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        console.log(msg)
      }
    }
  }
  const [programId, setProgramId] = useState(null)



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
    getOtherFee()
    getRegistration()
  }, [])




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



  const [lecoursename, setLeCoursename] = useState('')
  const [lesubcoursename, setLeSubcoursename] = useState('')
  const [lexamname, setLexamName] = useState('')
  const [lepurchasename, setLePurchaseName] = useState('')
  const [lacconame, setLacconame] = useState('')
  const [lotherfeename, setLotherFeeName] = useState('')


  const [laduration, setLaDuration] = useState('')
  const [coursedescription, setCourseDescription] = useState('')
  const [examdescription, setExamDescription] = useState('');
  const [purchasedescription, setPurchaseDescription] = useState('')
  const [accodescription, setAccoDescription] = useState('')
  const [otherfeedescription, setOtherFeeDescription] = useState('')

  const [courseList, setCourseList] = useState(getCourseDataFromLS())
  const [examList, setExamList] = useState(getExamDataFromLS())
  const [purchaseList, setPurchaseList] = useState(getPurchaseDataFromLS())
  const [accoList, setAccoList] = useState(getAccoDataFromLS())
  const [otherFeeList, setOtherFeeList] = useState(getOtherFeeDataFromLS())
  const [registrationList, setRegistrationList] = useState(getRegistrationDataFromLS)

  const addCurency = (e) => {
 
    setCurrency( {lecurrency,currencyvalue});
  }

  const addCourse = (e) => {
    e.preventDefault(e);
    const uuid = Math.random() + 89
    const regir = registrationprice * currencyvalue;
    let acourse = {
      lecoursename,
      lesubcoursename,
      laduration,
      price ,
      lecurrency,
      coursedescription,
      regir,
      registrationname,
      uuid,
      priceid
    }
    const uuidd = 22
    let registration = {
      registrationname,
      regir,
      lecurrency,
      uuid

    }
    setCourseList([...courseList, acourse]);
    if(courseList.length == 0)
    {setRegistrationList([...registrationList, registration]);}

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
      lecurrency,
      examdescription,
      uuid,
      exampriceid
    }
    setExamList([...examList, anexam]);
  }
  const [acotimes, setAcoTimes] = useState();
  const addAcco = (e) => {
    e.preventDefault(e);
    const uuid = Math.random() + 89
    let anacco = {
      lacconame,
      accoprice,
      accodescription,
      lecurrency,
      acotimes,
      uuid,
      accopriceid
    }
    setAccoList([...accoList, anacco]);
  }
  const addPurchase = (e) => {
    e.preventDefault(e);
    const uuid = Math.random() + 89
    let apurchase = {
      lepurchasename,
      purchaseprice,
      lecurrency,
      purchasedescription,
      uuid,
      purchasepriceid
    }
    setPurchaseList([...purchaseList, apurchase]);
  }

  const addOtherFee = (e) => {
    e.preventDefault(e);
    const uuid = Math.random() + 89
    let afee = {
      lotherfeename,
      otherfeeprice,
      lecurrency,
      otherfeedescription,
      uuid,
      otherFeePriceId
    }
    setOtherFeeList([...otherFeeList, afee]);
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

  useEffect(() => {
    localStorage.setItem('otherFeeList', JSON.stringify(otherFeeList))
  }, [otherFeeList])

  useEffect(() => {
    localStorage.setItem('registration', JSON.stringify(registrationList))
  }, [registrationList])

  useEffect(() => {
    localStorage.setItem('currency', JSON.stringify(currency))
  }, [currency])






  const deleteCourseFromList = (param) => {
    const filterr = courseList.filter((element, index) => {
      return element.uuid !== param;
    })
    setCourseList(filterr)
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

  const deleteOtherFeeFromList = (param) => {
    const filterr = otherFeeList.filter((element, index) => {
      return element.uuid !== param;
    })
    setOtherFeeList(filterr)

  }

  const deleteRegistrationFromList = (param) => {
    const filterr = registrationList.filter((element, index) => {
      return element.uuid !== param;
    })
    setRegistrationList(filterr)
  }

  const handleChangeCurency = () => {
    var lecurrency = document.getElementById("lecurrency");
    var selectedText = lecurrency.options[lecurrency.selectedIndex].innerHTML;
    var selectedValue = lecurrency.value;
    setLecurrency(selectedText);
    

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

  const handleChangeOtherFee = () => {
    var lotherfee = document.getElementById("lotherfee");
    var selectedText = lotherfee.options[lotherfee.selectedIndex].innerHTML;
    var selectedValue = lotherfee.value;
    setLotherFeeName(selectedText);
  }
  
  const  sumCoursePrice = courseList.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);

  const sumExamPrice = examList.reduce((accumulator, object) => {
    return accumulator + object.examprice;
  }, 0);

  const sumAccoPrice = accoList.reduce((accumulator, object) => {
    return accumulator + (object.accoprice * object.acotimes);
  }, 0);

  const sumPurchasePrice = purchaseList.reduce((accumulator, object) => {
    return accumulator + object.purchaseprice;
  }, 0);


  let total; 
  let subtotal;
  let discount=0;
  let fee;
  let table = []


  const[groupdiscount, setGroupdiscount] = useState(1)

  const getGroupDiscount = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/groupdiscount`);
    response.data && setGroupdiscount(response.data[0].pourcentage)
  }

  const [studentdiscount, setStudentDiscount] = useState(1);
  const [studentdiscountid, setStudentDiscountid] = useState('');

  const [lecode, setLecode] = useState('')

const getStudentDiscount = async (e) => {
  e.preventDefault()
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/discountcode`, {
    code: lecode
  });
  response.data && response.data.pourcentage ? setStudentDiscount(response.data.pourcentage) : setStudentDiscount(1)
  response.data && response.data.id ? setStudentDiscountid(response.data.id) : setStudentDiscountid('')

}


useEffect(() => {
  getGroupDiscount()
},[])



  const NumberOfCourse = courseList.length

  const fixfee = courseList.length !== 0 ? registrationprice * currencyvalue : 0;

 if(NumberOfCourse <= 1 ) {
  total = (sumCoursePrice + sumExamPrice + sumAccoPrice + sumPurchasePrice + fixfee) * (studentdiscount);
 }
else {
  for(let i=1; i<NumberOfCourse; i++) {
      fee = groupdiscount !== 1 ? (courseList[i].price * groupdiscount)/100 : courseList[i].price;
    
     table[i] = fee
     discount = table.reduce((a, b) => a + b, 0)
  }

  total = studentdiscount === 1 ?  (courseList[0].price + (sumCoursePrice - courseList[0].price) - discount) + sumExamPrice + sumAccoPrice + sumAccoPrice + sumPurchasePrice + fixfee : (sumCoursePrice - (sumCoursePrice * studentdiscount)/100) + sumExamPrice + sumAccoPrice + sumAccoPrice + sumPurchasePrice + fixfee ;
}
console.log(groupdiscount)
subtotal = sumCoursePrice + sumExamPrice + sumAccoPrice + sumAccoPrice + sumPurchasePrice + fixfee;


useEffect(() => {
  localStorage.setItem('total', JSON.stringify(total));
  localStorage.setItem('subtotal', JSON.stringify(subtotal));
  localStorage.setItem('discount', JSON.stringify(discount));

}, [total, subtotal, discount])



useEffect(() => {
  addCurency()
}, [])

const getStudentDiscountFromLS = () => {
  const data = localStorage.getItem('studdiscount');
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
}
const [studdiscount, setStudDiscount] = useState(getStudentDiscountFromLS())

const addStudDiscount = (e) => {
 
  setStudDiscount({lecode,studentdiscountid, groupdiscount});
}


useEffect(() => {
  addStudDiscount()
}, [groupdiscount])

useEffect(() => {
  localStorage.setItem('studdiscount', JSON.stringify(studdiscount))
}, [studdiscount])


/* 
let shirt = 0;

function isShirt(pruchase) {
  return pruchase.lepurchasename  == 'Tee-Shirt';
}
shirt = purchaseList.find(isShirt) ? purchaseList.find(isShirt) : 0;
const shirtprice = shirt ? shirt.purchaseprice : 0;
console.log(studentData)
useEffect(() => {
  setStudentData({...studentData, "Tshirtprice": shirtprice})
}, [shirtprice])


let book = 0;
function isBook(pruchase) {
  return pruchase.lepurchasename  == 'Books';
}
book = purchaseList.find(isBook) ? purchaseList.find(isBook) : 0 ;
const bb = book ? book.purchaseprice : 0;
setBookprice(bb)
useEffect(() => {
  localStorage.setItem('bookprice', JSON.stringify(bookprice))
}, [bookprice])

useEffect(() => {
  setStudentData({...studentData, "bookprice": bookprice})
}, [bookprice])
 */

useEffect(() => {
  setStudentData({...studentData,courseList, examList, accoList,purchaseList, otherFeeList, total, subtotal, discount, registrationList, currency, studdiscount})
}, [])
useEffect(() => {
  setStudentData({...studentData,examList, courseList})
}, [courseList])

 useEffect(() => {
  setStudentData({...studentData,examList, courseList})
}, [examList])

useEffect(() => {
  setStudentData({...studentData,examList, courseList, accoList})
}, [accoList])

useEffect(() => {
  setStudentData({...studentData,examList, courseList, accoList, purchaseList})
}, [purchaseList])

useEffect(() => {
  setStudentData({...studentData,examList, courseList, accoList, purchaseList, otherFeeList})
}, [otherFeeList])

useEffect(() => {
  setStudentData({...studentData,examList, courseList, accoList, purchaseList, otherFeeList, total})
}, [total])

useEffect(() => {
  setStudentData({...studentData,examList, courseList, accoList, purchaseList, otherFeeList, total, subtotal})
}, [subtotal])

useEffect(() => {
  setStudentData({...studentData,examList, courseList, accoList, purchaseList, otherFeeList, total, subtotal, discount})
}, [discount])


useEffect(() => {
  setStudentData({...studentData,examList, courseList, accoList, purchaseList, otherFeeList, total, subtotal, discount, registrationList, })
}, [registrationList])

useEffect(() => {
  setStudentData({...studentData,examList, courseList, accoList, purchaseList, otherFeeList, total, subtotal, registrationList, currency })
}, [currency])

useEffect(() => {
  setStudentData({...studentData,examList, courseList, accoList, purchaseList, otherFeeList, total, subtotal, registrationList, currency,studdiscount })
}, [studdiscount])


/*
useEffect(() => {
  setStudentData({...studentData,purchaseList})
}, [purchaseList])

useEffect(() => {
  setStudentData({...studentData,accoList})
}, [accoList])
 */


function separator(numb) {
  var str = numb.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str.join(".");
}



const [currencies, setCurrencies] = useState([]);

const getCurrencies = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/currency`);
  setCurrencies(response.data)
}

useEffect(() => {
  getCurrencies()
})
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
                onChange={(e) => { changeOption(e); handleChangee(e); handleChangeCourse();  }}
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



      {view && courseList.length !== 0 &&
        <div className=' ml-6 mt-4 flex flex-row items-center'>
          <div className='flex items-center'>
              <p className='font-medium text-lg'>Start date</p>
              <input type="date" className=" border-gray-700 border ml-2 w-40 p-2 border-none" 
                onChange={handleChangee}
                name="startdate"
                value={studentData["startdate"] || ""}
              />
          </div>
          <div className='flex ml-3 items-center'>
              <p className='font-medium text-lg'>Start date</p>
              <input type="date" className="ml-2 w-40 p-2 border-none"
                onChange={handleChangee}
                name="enddate"
                value={studentData["enddate"] || ""}
              />
          </div>
        </div>
      }




       

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
          <select class="bg-blue-100 border border-gray-300 text-gray-900 mt-3 text-xl p-2 
        focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[22rem] dark:border-gray-600 
        dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               
                onChange={(e) => setAcoTimes(e.target.value)}
              >

                <option value="1" className='text-md'>1</option>
                <option value="2" className='text-md'>2</option>
                <option value="3" className='text-md'>3</option>
                <option value="4" className='text-md'>4</option>
                <option value="5" className='text-md'>5</option>
                <option value="6" className='text-md'>6</option>
                <option value="7" className='text-md'>7</option>
                <option value="8" className='text-md'>8</option>
                <option value="9" className='text-md'>9</option>
                <option value="10" className='text-md'>10</option>
                <option value="11" className='text-md'>11</option>
                <option value="12" className='text-md'>12</option>

               
              </select>
        </div>}

        {view && <div className='m-5'>
          <p className='text-lg font-medium text-gray-600 '>Other Fees</p>
          <div className='flex flex-row items-center'>
            <div>
              <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 
        focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 
        dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="lotherfee"
                onChange={(e) => { handleChangeOtherFee(); setOtherFeeId(e.target.value) }}
                onClick={getOtherFeePrice}
              >

                <option value="" className='text-md'></option>
                {otherfee.map((fee) => (
                  <option className='text-xl' value={fee.id}>{fee.feename}</option>
                ))}
              </select>
            </div>
            <div className=' cursor-pointer' onClick={addOtherFee}>
              <MdOutlineAddToPhotos style={{ fontSize: "45px", color: "green" }} />
            </div>

          </div>
        </div>}




      </div>


      <div className='ml-10 mt-12 w-full'>
        <div className="flex flex-row">
          <div>
            <p className='text-lg font-medium text-gray-600 mb-1 '>Choose Currency</p>
            <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 focus:ring-blue-500 
            focus:border-blue-500 block  dark:bg-gray-700 w-[22rem] dark:border-gray-600 
            dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
                onChange={(e) => {setCurrencyValue( e.target.value); handleChangeCurency(); getRegistration();}}
                id='lecurrency'
                onClick={addCurency}
            >  
            <option></option>  
              {
                currencies.map((currency, index) => (
                  <option value={currency.value}>{currency.symbol}</option>
                ))
              }
             


            </select>
          </div>
          <div className="ml-2">
            <p className='text-lg font-medium text-gray-600 mb-1 '>Discount Code</p>
            <input type="text" class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 focus:ring-blue-500 
            focus:border-blue-500 block  dark:bg-gray-700 w-[22rem] dark:border-gray-600 
            dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
         
                onKeyUpCapture={(e) => {getStudentDiscount(e);setLecode(e.target.value); addStudDiscount()}}
        
              />
          </div>
        </div>
        <div className=' bg-dark-purple w-full p-1'>
            <div className='flex justify-end items-center'>
                <span className='text-white text-xl'>Total:</span>
                <span className='text-white ml-6 bg-red font-bold min-w-1 6 p-2 rounded-xl text-xl'>{separator(total)}</span>
            </div>
        </div>
        <div>
        {
          courseList.length > 0 &&
          <div>

            <div className='w-full bg-gray-300 text-right p-2 font-semibold border-b-2'>{registrationList[0].registrationname} : <span className='font-bold text-xl'>{registrationList[0].regir}</span></div>
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
                    <td class="p-3 text-center font-medium block md:table-cell">{course.lecurrency} {separator(course.price)}</td>
                    <td class="p-3 w-32 text-center font-medium block md:table-cell">
                      <div onClick={() =>{ deleteCourseFromList(course.uuid); deleteRegistrationFromList(course.uuid)}} className=' cursor-pointer flex items-center p-2 shadow-md bg-white rounded-md'>
                        <BiTrash style={{ fontSize: "20px", color: 'red' }} />
                        <span className='ml-1 text-sm text-black'>Delete</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='mb-3 justify-end flex m-2'>
            <button onClick={()=>{setCourseList([]); setRegistrationList([])}} className='justify-center flex items-center cursor-pointer p-1 shadow-lg rounded-lg font-semibold bg-redd text-white w-64'>Remove All</button>
          </div>

          </div>

        }
        </div>
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
                    <td class="p-3 text-center font-medium block md:table-cell"> {exam.lecurrency} {separator(exam.examprice)}</td>
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
                    <td class="p-3 text-center font-medium block md:table-cell"> {purchase.lecurrency} {separator(purchase.purchaseprice)}</td>
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
                  <th class="bg-dark-purple p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Duration</th>
                  <th class="bg-dark-purple p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Price</th>
                  <th class="bg-dark-purple p-2 w-32 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Actions</th>
                </tr>
              </thead>
              <tbody class="block md:table-row-group">
                {accoList.map((acco, index) => (
                  <tr class="bg-gray-300 border-b-2 block md:table-row">
                    <td class="p-3 w-10  text-center font-medium block md:table-cell">{index + 1}</td>
                    <td class="p-3 w-48 text-center font-medium block md:table-cell">{acco.lacconame}</td>
                    <td class="p-3 w-48 text-center font-medium block md:table-cell">{acco.acotimes}</td>
                    <td class="p-3 text-center font-medium block md:table-cell">{acco.lecurrency} {separator(acco.accoprice)}</td>
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
        <div>
          {
            otherFeeList.length > 0 && <>
            <table class="min-w-full shadow-lg border-collapse block md:table">
              <thead class="block md:table-header-group">
                <tr class="border border-gray-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                  <th class=" bg-dark-purple p-2 w-10 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">N</th>
                  <th class="bg-dark-purple p-2 w-48 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">other Fees </th>
                  <th class="bg-dark-purple p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Price</th>
                  <th class="bg-dark-purple p-2 w-32 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Actions</th>
                </tr>
              </thead>
              <tbody class="block md:table-row-group">
                {otherFeeList.map((fee, index) => (
                  <tr class="bg-gray-300 border-b-2 block md:table-row">
                    <td class="p-3 w-10  text-center font-medium block md:table-cell">{index + 1}</td>
                    <td class="p-3 w-48 text-center font-medium block md:table-cell">{fee.lotherfeename}</td>
                    <td class="p-3 text-center font-medium block md:table-cell">{fee.lecurrency} {separator(fee.otherfeeprice)}</td>
                    <td class="p-3 w-32 text-center font-medium block md:table-cell">
                      <div onClick={() => deleteOtherFeeFromList(fee.uuid)} className=' cursor-pointer flex items-center p-2 shadow-md bg-white rounded-md'>
                        <BiTrash style={{ fontSize: "20px", color: 'red' }} />
                        <span className='ml-1 text-sm text-black'>Delete</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className=' justify-end flex items-center m-2'>
            <button onClick={()=>setOtherFeeList([])} className=' justify-center flex items-center cursor-pointer p-1 shadow-lg rounded-lg font-semibold bg-redd text-white w-64'>Remove All</button>
            </div>
            </>
          }
        </div>
      </div>





    </div>

  )
}

export default CoursesPurchasesExam