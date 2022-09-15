import React, {useEffect, useState} from 'react'
import Layout from '../components/Screens/Layout'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/auth/authSlice'
import axios from 'axios'
import { useParams } from 'react-router-dom';


const EditItemsSale = ({props}) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch])

  useEffect(() => {
    if(isError) {
      navigate("/")
    }
  }, [isError, navigate
  ])

  const [purchasename, setPurchasename] = useState("");
  const [purchaseprice, setPurchaseprice] = useState("");
  const [description, setDescription] = useState("");

  const [msg, setMsg] = useState("");



  const { id } = useParams();
  const getItems = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/purchase/${id}`);
    setPurchasename(response.data.purchasename);
    setPurchaseprice(response.data.purchaseprice);
    setDescription(response.data.description)
  }
  const updateItems = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${process.env.REACT_APP_BASE_URL}/purchase/${id}`, {
        purchasename: purchasename,
        purchaseprice: purchaseprice,
        description: description
      });
      navigate("/itemssale");
    } catch (error) {
      if(error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }

  useEffect(() => {
    getItems();
    updateItems();

  }, [])

 
  return (
    <Layout>
        <div className='mt-10 ml-5'>
            <p className='font-bold text-3xl'>Purchases</p>
            <p className='text-gray-400 text-2xl'>Edit Purchases</p>
            <div className='bg-white h-[20rem] p-5  ml-1 mt-3 elevation'>
                <form onSubmit={updateItems}>
                  
                  
                    <div className='mt-5'>
                      <label className='text-xl font-bold'>Purchase Name</label>
                      <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                        value={purchasename}
                        onChange={(e) => setPurchasename(e.target.value)} 
                        required
                      />
                    </div>
                    <div className='mt-5'>
                      <label className='text-xl font-bold'>Purchase Price</label>
                      <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                        value={purchaseprice}
                        onChange={(e) => setPurchaseprice(e.target.value)} 
                        required
                      />
                    </div>
                    <div className='mt-5'>
                      <label className='text-xl font-bold'>Description</label>
                      <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} 
                        required
                      />
                    </div>
                  
                      <p className='text-sm text-center text-red'>{msg}</p>
                      <div className='flex flex-row  mt-3 mb-3'>
                        <button className='bg-blue-600 rounded text-gray-100 font-medium w-30 h-10 p-3 flex items-center justify-center' type="submit">
                          Update Purchase
                        </button>
                        <button  className='bg-blue-600 rounded text-gray-100 font-medium w-20 h-10 p-3 flex items-center justify-center ml-5'>
                          Cancel
                        </button>
            </div>
                </form>
            </div>

        </div>
    </Layout>
  )
}

export default EditItemsSale