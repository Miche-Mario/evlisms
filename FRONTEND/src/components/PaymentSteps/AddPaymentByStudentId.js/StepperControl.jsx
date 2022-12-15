import React from 'react'

const StepperControl = ({handleClick, currentStep, steps, click, open, clickk}) => {
const named = () => {
  if(currentStep == steps.length -1)
    { return "Receipt"} 
    
    else if (currentStep == steps.length)
    {return "Revenir"}
    else {
      return "Next"
    }
  } 

  
  return (
    <div className='container mt[2rem] mb-5 m-3  flex justify-between'>
        <button 
          onClick={(e)=> {handleClick(); clickk(e)}}
          className={`ml-32 btn btn-outline-secondary border border-black w-48 bg-gray-100 text-gray-700 
          ${currentStep == 1 ? "p-2 cursor-not-allowed"
          : ""} 
          
          ${steps.length - 1 && " hidden"}`}
        >
            Back
        </button>
        <button 
          onClick={(e)=> {handleClick("next"); click(e)}}
          className={`mr-32 bg-green-400 text-white  uppercase py-2 px-4
          rounded-xl font-semibold cursor-pointer  
          hover:bg-green-600 hover:text-white transition duration-200 ease-in-out
         
          ${!open && currentStep == steps.length - 1 ? " hidden"
          : "block"}`} 
        >
            {named()}
        </button>
    </div>
  )
}

export default StepperControl