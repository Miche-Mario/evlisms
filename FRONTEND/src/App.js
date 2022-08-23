import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'

import Login from "./pages/Login"
import Students from './pages/students';
import AddStudents from './pages/AddStudents'
import Courses from './pages/Courses';
import Prospects from './pages/Prospects'; 
import Expenses from './pages/Expenses';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import axios from "axios";
import EditUser from './pages/EditUser';
import Language from './pages/Language'
import ClassType from './pages/Classtype'
import EditLanguage from './pages/EditLanguage'
import PaymentMethods from "./pages/PaymentMethods"
import EditPaymentMethods from "./pages/EditPaymentMethod"
import EditClassType from "./pages/EditClasstype.js"
import PriceType from './pages/Pricetype';
import EditPriceType from './pages/EditPriceType';
import AddCourse from './pages/AddCourse';
import EditCourse from './pages/EditCourse'
axios.defaults.withCredentials = true;

function App() {
  return (
   <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/students' element={<Students/>}/>
            <Route path='/addStudents' element={<AddStudents/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/prospects' element={<Prospects/>}/>
            <Route path='/expenses' element={<Expenses/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/language' element={<Language/>}/>
            <Route path='/classtype' element={<ClassType/>}/>
            <Route path='/pricetype' element={<PriceType/>}/>
            <Route path='/users/edit/:id' element={<EditUser/>}/>
            <Route path='/classtype/edit/:id' element={<EditClassType/>}/>
            <Route path='/pricetype/edit/:id' element={<EditPriceType/>}/>
            <Route path='/language/edit/:id' element={<EditLanguage/>}/>
            <Route path='/course/edit/:id' element={<EditCourse/>}/>
            <Route path='/paymentmethods/edit/:id' element={<EditPaymentMethods/>}/>
            <Route path='/paymentmethods' element={<PaymentMethods/>}/>
            <Route path="/addcourse" element={<AddCourse/>}/>

        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
