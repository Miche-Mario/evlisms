import { Checkbox } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Layout from '../components/Screens/Layout'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { getMe } from '../features/auth/authSlice'
import { BiEdit } from 'react-icons/bi'
import { MdDeleteSweep } from 'react-icons/md'
import axios from "axios"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 500,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid darkblue',
    boxShadow: 24,
    p: 0,
    m: 0,
    height: 'auto'
  };
const StudentsDiscounts = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const [groupdiscounts, setGroupDiscount] = useState([]);

  const getGroupDiscounts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/groupdiscount`);
    setGroupDiscount(response.data)
  }

  


  const [groupname, setGroupname] = useState("");
  const [grouppourcentage, setGrouppourcentage] = useState("");


  const saveGroupDiscount = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/groupdiscount`, {
        name: groupname,
        pourcentage: grouppourcentage,
      });
      navigate(0);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }

  useEffect(() => {
    getGroupDiscounts();
  }, [])

  const [openGd, setOpenGd] = useState(false);
  const handleOpenGd = () => {
    setOpenGd(true);
  };
  const handleCloseGd = () => {
    setOpenGd(false);
  };

  const [open1Gd, setOpen1Gd] = useState(false);
  const [vaGd, setVaGd] = useState("");

  const handleOpen1Gd = (uuid) => {
    setOpen1Gd(true);
    setVaGd(uuid)
  };
  const handleClose1Gd = () => {
    setOpen1Gd(false);
  };
  return (
    <Layout >
      <Modal
        open={openGd}
        onClose={handleCloseGd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <p class="text-white text-xl p-3  bg-dark-purple w-full">DISCOUNT GROUP DETAILS</p>
          <form onSubmit={saveGroupDiscount}>
            <div className='flex flex-row m-3 justify-around items-center'>
              <div className=''>
                <label for="first_name" class="block mb-6 text-base font-medium text-gray-900 p-1">Name</label>
                <label for="first_name" class="block mb-6 text-base font-medium text-gray-900 p-1">Value[1%]</label>

              </div>
              <div >
              <input type="text" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-1.5 " placeholder="name" 
                value={groupname}
                onChange={(e) => setGroupname(e.target.value)}  
              />
              <input type="tex" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-1.5 " placeholder="00" 
                value={grouppourcentage}
                onChange={(e) => setGrouppourcentage(e.target.value)}  
              />

              </div>
            </div>
            <div className='flex flex-row justify-around  mt-3 mb-3'>
              <button className='bg-blue-600 rounded text-gray-100 font-medium w-20 h-10 flex items-center justify-center' type="submit" name='Add'>
                Ok
              </button>
              <button onClick={handleCloseGd} className='bg-blue-600 rounded text-gray-100 font-medium w-20 h-10 flex items-center justify-center' type="submit" name='Add'>
                Cancel
              </button>
            </div>
          </form>
        </Box>


      </Modal>




      <div className='m-3 '>
        <fieldset className='border w-auto  rounded border-dark-purple'>
          <legend className='p-1 ml-3 text-xl text-blue-700'>DISCOUNT GROUPS</legend>
        
        
          <div className='w-5/12 h-4/12 ml-3 shadow-xl p-3'>
        <div className='m-3'>
        <div>
            <div className='flex'>
            <button onClick={handleOpenGd} className='bg-blue-600 rounded ml-3 text-gray-100 font-medium w-48 h-10 p-3 flex items-center justify-center' type="submit" name='Add'>
              Add
            </button>
          </div>
          <div className='m-3 mb-0 '>
            <table className="w-[40rem]">
              <thead>
                <tr className=" border border-dark-purple bg-gray-200  text-gray-600 uppercase text-sm leading-normal">
                  <th className=" border border-dark-purple py-3 px-3 text-center">N</th>
                  <th className=" border border-dark-purple py-3 px-3 text-center">Name</th>
                  <th className=" border border-dark-purple py-3 px-3 text-center">Value [1%]</th>
                  <th className=" border border-dark-purple py-3 px-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600  text-sm font-light">
                {groupdiscounts.map((gdis, index) => ( 
                <tr key={gdis.uuid} className=" border-gray-400  hover:bg-gray-100 border-b-2">
                  <td className="p-0  border border-dark-purple">
                    <div className="flex items-center justify-center">
                      <span className="font-medium uppercase">{index + 1}</span>
                    </div>
                  </td>
                  <td className=" py-3 px-3 text-center  border border-dark-purple">
                    <div className="flex items-center justify-center">
                      <span className="font-medium uppercase">{gdis.name}</span>
                    </div>
                  </td>
                  <td className=" py-3 px-3 text-center  border border-dark-purple">
                    <div className="flex items-center justify-center">
                      <span className="font-medium uppercase">{gdis.pourcentage}</span>
                    </div>
                  </td>
                  
                  <td className=" py-3 px-3 text-center  border border-dark-purple">
                  <div className="flex item-center justify-center">
                          <div>
                            <Link
                               to={`/groupdiscount/edit/${gdis.uuid}`}
                            >
                              <button className='flex items-center p-1 bg-green-600 text-white text-[1rem]'>
                                <BiEdit />Edit
                              </button>
                            </Link>

                          </div>
                        {/*   <div className='ml-3'>

                            <button
                              className='flex items-center p-1 bg-red text-white text-[1rem]'
                                onClick={() => handleOpen1Gd(gdis.uuid)}
                            >
                              <MdDeleteSweep size={20} />Delete
                            </button>
                          </div> */}
                        </div>
                  </td>
                </tr>))}
              </tbody>
            </table>
          </div>
          <div className='m-6 flex justify-end'>       
          </div>
        </div>
      </div>
        </div>
        
        </fieldset>
      </div>






















     
    </Layout>
  )
}

export default StudentsDiscounts