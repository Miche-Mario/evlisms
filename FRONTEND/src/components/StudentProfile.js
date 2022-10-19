import React, {useEffect, useState} from 'react'
import  { useParams } from 'react-router-dom'
import axios from 'axios'
import Layout from './Screens/Layout'
import { FaCamera } from 'react-icons/fa'
import ModalImage from "react-modal-image";
import { TiInfoOutline } from 'react-icons/ti'
import { GiTakeMyMoney } from 'react-icons/gi'

const StudentProfile = () => {

    const { id } = useParams();
    const [ student, setStudent] = useState()

    const getStudent = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/students/${id}`);
        setStudent(response.data)
    }

    
    const [showall, setShowAll] = useState()
    const [hideShowAll, setHideShowAll] = useState(false)

    useEffect(() => {
        getStudent();
        setShowAll(false)
    }, [])


    console.log(student)


    return (
        <Layout>
            <div>
                <div class="bg-gray-100">
                    <div class="container mx-auto my-5 p-5">
                        <div class="md:flex no-wrap md:-mx-2 ">
                            {/* Left Side */}
                            <div class="w-full md:w-3/12 md:mx-2">
                                {/* Profile Card */}
                                <div class="bg-white p-3 border-t-4 border-green-400">
                                    <div class="image overflow-hidden">
                                        <ModalImage
                                            small={student && student.idscang}
                                            large={student && student.idscang}
                                            alt="passportphotographg"
                                            hideDownload={true}
                                            hideZoom={true}
                                            className="modal-image"
                                        />
                                    </div>
                                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{student && student.surnameg} {student && student.forenamesg}</h1>
                                    <h3 class="text-gray-600 font-lg text-semibold leading-6">{student && student.occupationg}</h3>
                                    <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">{student && student.noteg}</p>
                                    <ul
                                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                        <li class="flex items-center py-3">
                                            <span>Status</span>
                                            <span class="ml-auto"><span
                                                class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                                        </li>
                                        <li class="flex items-center py-3">
                                            <span>Start Date</span>
                                            <span class="ml-auto">{student && student.startdate}</span>
                                        </li>
                                        <li class="flex items-center py-3">
                                            <span>End Date</span>
                                            <span class="ml-auto">{student && student.enddate}</span>
                                        </li>
                                    </ul>
                                </div>
                                {/* End of profile card */}
                                <div class="my-4"></div>
                                {/* Friends card */}
                                <div class="bg-white p-3 hover:shadow">
                                    <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                        <span class="text-green-500">
                                            <FaCamera style={{fontSize: 45,}}/>
                                        </span>
                                        <span>Passport Photograph</span>
                                    </div>
                                    <div>
                                        <div className='w-full h-auto'>
                                            <ModalImage
                                                small={student && student.passportphotographg}
                                                large={student && student.passportphotographg}
                                                alt="passportphotographg"
                                                hideDownload={true}
                                                hideZoom={true}
                                                className="modal-image"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* End of friends card */}
                            </div>
                            {/* Right Side */}
                            <div class="w-full md:w-9/12 mx-2 h-64">
                                {/* Profile tab */}
                                {/* About Section */}
                                <div class="bg-white p-3 shadow-sm rounded-sm">
                                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                       <TiInfoOutline style={{fontSize: 35}} />
                                        <span class="tracking-wide font-bold text-xl">General Information</span>
                                    </div>
                                    <div class="text-gray-700">
                                        <div class="grid md:grid-cols-2 text-sm">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">First Name</div>
                                                <div class="px-4 py-2">{student && student.forenamesg}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Last Name</div>
                                                <div class="px-4 py-2">{student && student.surnameg}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Gender</div>
                                                <div class="px-4 py-2">{student && student.genderg}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Date of Birth</div>
                                                <div class="px-4 py-2">{student && student.dateofbirthg}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Date of Birth</div>
                                                <div class="px-4 py-2">{student && student.placeofbirthg}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Citizenship</div>
                                                <div class="px-4 py-2">{student && student.citizenshipg}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Email.</div>
                                                <div class="px-4 py-2">
                                                    <a class="text-blue-800" href="mailto:jane@example.com">{student && student.emailg}</a>
                                                </div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Home Tel.</div>
                                                <div class="px-4 py-2">{student && student.telhomeg}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Ghana Tel.</div>
                                                <div class="px-4 py-2">{student && student.telghanag}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Current Address</div>
                                                <div class="px-4 py-2">{student && student.addressghanag}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Home Address</div>
                                                <div class="px-4 py-2">{student && student.addresshomeg}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Marital Status</div>
                                                <div class="px-4 py-2">{student && student.maritalg}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Passport ID</div>
                                                <div class="px-4 py-2">{student && student.passportidg}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Academic Level</div>
                                                <div class="px-4 py-2">{student && student.academiclevelg}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">How did {student && student.genderg === "female" ? "she" : "he"} hear about us ?</div>
                                                <div class="px-4 py-2">{student && student.aboutidg}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {  !showall &&
                                        <button
                                        onClick={() => setShowAll(true)}
                                        class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                                        Full Information</button>}
                                        
                                        
                                  
                                  
                                  { showall && <>  
                                  
                                        <button
                                    onClick={() => setShowAll(false)}
                                        class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Hide Source of Funding</button>
                                  
                                  <div class="flex items-center spac
                                    e-x-2 font-semibold text-gray-900 mt-4 leading-8">
                                        <GiTakeMyMoney style={{fontSize: 35}} />
                                        <span class="tracking-wide font-bold text-xl">Source of Funding</span>
                                    </div>
                                    <p className='mt-5 ml-3 text-lg font-semibold'>Emergency</p>
                                    <div class="text-gray-700">
                                        <div class="grid md:grid-cols-2 text-sm">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Surname</div>
                                                <div class="px-4 py-2">{student && student.surnamee}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Firstname</div>
                                                <div class="px-4 py-2">{student && student.forenamese}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Gender</div>
                                                <div class="px-4 py-2">{student && student.gendere}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Relationship</div>
                                                <div class="px-4 py-2">{student && student.relationshipe}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Occupation</div>
                                                <div class="px-4 py-2">{student && student.occupatione}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Email</div>
                                                <div class="px-4 py-2">{student && student.emaile}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Tel 1.</div>
                                                <div class="px-4 py-2">{student && student.tel1e}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Tel 2.</div>
                                                <div class="px-4 py-2">{student && student.tel2e}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Address</div>
                                                <div class="px-4 py-2">{student && student.addresse}</div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <p className='mt-5 ml-3 text-lg font-semibold'>Parent / Guardian</p>
                                    <div class="text-gray-700">
                                        <div class="grid md:grid-cols-2 text-sm">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Surname</div>
                                                <div class="px-4 py-2">{student && student.surnamep}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Firstname</div>
                                                <div class="px-4 py-2">{student && student.forenamesp}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Gender</div>
                                                <div class="px-4 py-2">{student && student.genderp}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Relationship</div>
                                                <div class="px-4 py-2">{student && student.relationshipp}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Occupation</div>
                                                <div class="px-4 py-2">{student && student.occupationp}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Email</div>
                                                <div class="px-4 py-2">{student && student.emailp}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Tel 1.</div>
                                                <div class="px-4 py-2">{student && student.tel1p}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Tel 2.</div>
                                                <div class="px-4 py-2">{student && student.tel2p}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Address</div>
                                                <div class="px-4 py-2">{student && student.addressp}</div>
                                            </div>
                                        </div>


                                        
                                        
                                    </div>

                                    <p className='mt-5 ml-3 text-lg font-semibold'>Organisation</p>
                                    <div class="text-gray-700">
                                        <div class="grid md:grid-cols-2 text-sm">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Name</div>
                                                <div class="px-4 py-2">{student && student.nameo}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Email</div>
                                                <div class="px-4 py-2">{student && student.emailo}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Contact.</div>
                                                <div class="px-4 py-2">{student && student.contacto}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Tel 1.</div>
                                                <div class="px-4 py-2">{student && student.tel1o}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Tel 2.</div>
                                                <div class="px-4 py-2">{student && student.tel2o}</div>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">Address</div>
                                                <div class="px-4 py-2">{student && student.addresso}</div>
                                            </div>
                                        </div>


                                        
                                        
                                    </div></>}


                                    
                                  
                                </div>
                                {/* End of about section */}

                                <div class="my-4"></div>

                                {/* Experience and education */}
                                <div class="bg-white p-3 shadow-sm rounded-sm">

                                    <div class="grid grid-cols-2">
                                        <div>
                                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                                <span clas="text-green-500">
                                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </span>
                                                <span class="tracking-wide">Experience</span>
                                            </div>
                                            <ul class="list-inside space-y-2">
                                                <li>
                                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                                </li>
                                                <li>
                                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                                </li>
                                                <li>
                                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                                </li>
                                                <li>
                                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                                <span clas="text-green-500">
                                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                        <path fill="#fff"
                                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                    </svg>
                                                </span>
                                                <span class="tracking-wide">Education</span>
                                            </div>
                                            <ul class="list-inside space-y-2">
                                                <li>
                                                    <div class="text-teal-600">Masters Degree in Oxford</div>
                                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                                </li>
                                                <li>
                                                    <div class="text-teal-600">Bachelors Degreen in LPU</div>
                                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* End of Experience and education grid */}
                                </div>
                                {/* End of profile tab */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default StudentProfile