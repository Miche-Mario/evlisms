

import Layout from '../components/Screens/Layout'
import Login from '../components/Screens/login'
import axios from 'axios'



axios.defaults.withCredentials = true
export default function Home() {
  return (
    <Login/>
  )
}
