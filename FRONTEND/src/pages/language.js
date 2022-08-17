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
const Language = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch])

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.role !== "admin") {
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);



  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [languages, setLanguages] = useState([]);

  const getLanguages = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/languages`);
    setLanguages(response.data)
  }

  const deleteLanguage = async (userId) => {
    await axios.delete(`${process.env.REACT_APP_BASE_URL}/languages/${userId}`);
    getLanguages();
    navigate(0);
  }





  const [open1, setOpen1] = useState(false);
  const [va, setVa] = useState("");

  const handleOpen1 = (uuid) => {
    setOpen1(true);
    setVa(uuid)
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  return (
    <Layout >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <p class="text-white text-xl p-3  bg-dark-purple w-full">LANGUAGE DETAILS</p>
          <form>
            <div className='flex flex-row m-3 justify-around items-center'>
              <div className=''>
                <label for="first_name" class="block mb-6 text-base font-medium text-gray-900 p-1">Name</label>
              
              </div>
              <div >
              <input type="text" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-1.5 " placeholder="name" />

              </div>
            </div>
            <div className='flex flex-row justify-around  mt-3 mb-3'>
              <button className='bg-blue-600 rounded text-gray-100 font-medium w-20 h-10 flex items-center justify-center' type="submit" name='Add'>
                Ok
              </button>
              <button onClick={handleClose} className='bg-blue-600 rounded text-gray-100 font-medium w-20 h-10 flex items-center justify-center' type="submit" name='Add'>
                Cancel
              </button>
            </div>
          </form>
        </Box>


      </Modal>




      <div className='m-3'>
        <div>
          <legend className='p-1 ml-3 text-xl text-blue-700'>LANGUAGES</legend>
            <div className='flex'>
            <button onClick={handleOpen} className='bg-blue-600 rounded ml-3 text-gray-100 font-medium w-48 h-10 p-3 flex items-center justify-center' type="submit" name='Add'>
              Add
            </button>
          </div>
          <div className='m-3 mb-0 '>
            <table className="w-[40rem]">
              <thead>
                <tr className=" border border-dark-purple bg-gray-200  text-gray-600 uppercase text-sm leading-normal">
                  <th className=" border border-dark-purple py-3 px-3 text-center">N</th>
                  <th className=" border border-dark-purple py-3 px-3 text-center">Name</th>
                  <th className=" border border-dark-purple py-3 px-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600  text-sm font-light">
                <tr className=" border-gray-400  hover:bg-gray-100 border-b-2">
                  <td className="p-0  border border-dark-purple">
                    <div className="flex items-center justify-center">
                      <span className="font-medium uppercase">2</span>
                    </div>
                  </td>
                  <td className=" py-3 px-3 text-center  border border-dark-purple">
                  <div className="flex items-center justify-center">
                      <span className="font-medium uppercase">Français</span>
                    </div>
                  </td>
                  <td className=" py-3 px-3 text-center  border border-dark-purple">
                  <div className="flex item-center justify-center">
                          <div>
                            <Link
                            to=""
                              // to={`/users/edit/${use.uuid}`}
                            >
                              <button className='flex items-center p-1 bg-green-600 text-white text-[1rem]'>
                                <BiEdit />Edit
                              </button>
                            </Link>

                          </div>
                          <div className='ml-3'>

                            <button
                              className='flex items-center p-1 bg-red text-white text-[1rem]'
                              // onClick={() => handleOpen1(use.uuid)}
                            >
                              <MdDeleteSweep size={20} />Delete
                            </button>
                          </div>
                        </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='m-6 flex justify-end'>       
          </div>
        </div>
      </div>






















     
    </Layout>
  )
}

export default Language