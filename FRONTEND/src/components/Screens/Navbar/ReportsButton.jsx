import React from 'react'

const ReportsButton = () => {
  return (
    <div className="group inline-block text-light-dark ml-2  text-10">
      <button
        className="outline-offset-2outline-1  px-3 py-1 bg-dark-purple rounded-sm flex items-center w-auto"
      >
        <span className="pr-1 font-semibold flex-1 text-white">Reports</span>
        <span>
          <svg
            className="fill-current h-4 w-4 text-white transform group-hover:-rotate-180 transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill='#fff'
          >
            <path
         
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </span>
      </button>
      <ul
        className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
      >
        <li className="rounded-sm px-3 py-1 hover:bg-gray pl-6 cursor-pointer">Daily Payments</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray pl-6 cursor-pointer">Monthly item sale</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray pl-6 cursor-pointer">Balance Sheet</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray pl-6 cursor-pointer ">Projected Receivables - Courses</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray pl-6 cursor-pointer ">Projected Receivables - Purchases</li>
        <hr className='ml-2 mr-2 mb-2 mt-2'/>
        <li className="rounded-sm px-3 py-1 hover:bg-gray pl-6 cursor-pointer ">Courses and groups</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray pl-6 cursor-pointer ">New students in period</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray pl-6 cursor-pointer ">Students with debt</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray pl-6 cursor-pointer ">Students with active courses</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray pl-6 cursor-pointer ">Student enrollment</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray pl-6 cursor-pointer ">Dropouts</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray pl-6 cursor-pointer ">Expenses in period</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray pl-6 cursor-pointer ">Monthly Expenses</li>
 
      </ul>
    </div>
  )
}

export default ReportsButton