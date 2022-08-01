import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from "./pages/Login"
import Students from './pages/students';
import AddStudents from './pages/AddStudents'
import Courses from './pages/Courses';
import Prospects from './pages/Prospects';
import Expenses from './pages/Expenses';
import Dashboard from './pages/Dashboard'
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


        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
