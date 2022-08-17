import React, { useEffect, useState } from 'react'
import Layout from '../components/Screens/Layout'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/auth/authSlice'
import axios from 'axios'
import { useParams } from 'react-router-dom';


const AddCourse = ({ props }) => {

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

  const [classtypename, setClasstypename] = useState("");
  const [msg, setMsg] = useState("");



  const { id } = useParams();
  const getClasstype = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/classtype/${id}`);
    setClasstypename(response.data.classtypename);

  }

  useEffect(() => {
    getClasstype();
  }, [])


  return (
    <Layout>
      <div className='mt-10 ml-5'>
        <p className='font-bold text-3xl'>Course</p>
        <p className='text-gray-400 text-2xl'>Add New Course</p>
        <div className='bg-white h-[20rem] p-5  ml-1 mt-3 elevation'>
        <form >
                    <div>
                      <label className='text-xl font-bold'>Course name</label>
                      <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w- p-2.5 " 
                        /* value={name}
                        onChange={(e) => setName(e.target.value)}  */
                        required
                      />
                    </div>
        </form>
        </div>
      </div>
    </Layout>
  )
}

export default AddCourse