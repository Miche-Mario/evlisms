import React from "react"
import ProgramButton from "./ProgramButton"
import ReportsButton from "./ReportsButton"
import ToolsButton from "./ToolsButton"
import MaintenanceButton from "./Maintenance"
import HelpButton from "./HelpButton"

export default function Navbar() {
  return (

    <nav className="flex bg-gray h-10 w-full mt-0  border-b-2 pb-2 pt-2 border-dark-purple">
      <div className=" xl:px-12  flex justify-between  w-full items-center">
          <div className="text-xl">
            <a className="  text-dark-purple font-bold lg-ml-2 2xl:ml-0 xl:ml-0 " href="#">
            Eagle Vision
            </a>
          </div>
          
        <div>
            <ProgramButton/>
            <ReportsButton/>
            <ToolsButton/>
            <MaintenanceButton/>
            <HelpButton/>
            <div className="inline-block text-black lg:ml-10 text-xl font-light">Alex</div>
            <div className="inline-block w-3 h-3 ml-1 lg:mr-3 rounded-full bg-green-400"> </div>
        </div>
      </div>
    </nav>

  )
}
