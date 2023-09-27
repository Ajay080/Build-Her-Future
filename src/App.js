import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/Home/HomePage';
import Footer from './Components/Footer/Footer';
import { useNavigate } from "react-router-dom"
import CareerRoadMap from './Pages/CareerRoadMap/CareerRoadMap';
import "./App.css"
import SignUp from "./LoginSignup/SignUp"
import {AuthContext}  from "./AuthProvider"
import {useContext } from "react"
import Login from "./LoginSignup/Login"

import {Routes, Route} from 'react-router-dom'

import JobPortal from './Pages/JobPortal/Blogs3'
import AboutMe from './Pages/AboutMe/AboutMe';

function App() {
  const navigate=useNavigate;
  const { isAuthenticated, isAdmin} = useContext(AuthContext)
  

  const AuthenticatedRoutes = () => 
  <Routes>

    <Route path='/' element={<HomePage/>}/>
    <Route path='/jobportal' element={<JobPortal/>}/>
    <Route path='/aboutus' element={<AboutMe/>}/>
    <Route path='/careerroadmap' element={<CareerRoadMap/>}/>

  </Routes>


  const UnauthenticatedRoutes = () => <Routes>
  <Route path="/signup" element={<SignUp />} />
  <Route path="/login" element={<Login />} />
  <Route path="*" element={<Login />} />
  </Routes>

  return (
    
      <div className="App">
        {isAuthenticated ?
        <>
        <Navbar/>
        <AuthenticatedRoutes/>
        <Footer/>
        </>
        :
        <UnauthenticatedRoutes/>
        }
        
      </div>
    
  );
}

export default App;
