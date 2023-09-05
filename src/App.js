// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/Home/HomePage';
import Footer from './Components/Footer/Footer';
// import Blogs from './Pages/Blogs/Blogs';
import { useNavigate } from "react-router-dom"
import CareerRoadMap from './Pages/CareerRoadMap/CareerRoadMap';
import WrongInput from './LoginSignup/WrongInput';
import "./App.css"
import SignUp from "./LoginSignup/SignUp"
import {AuthContext}  from "./AuthProvider"
import {useContext } from "react"
import Login from "./LoginSignup/Login"

import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import Blogs3 from './Pages/Blogs/Blogs3';
import AddBlogs from './Pages/AddBlogs/AddBlogs';
import Aboutus from './Pages/Aboutus/Aboutus';

function App() {
  const navigate=useNavigate;
  const { isAuthenticated, isAdmin} = useContext(AuthContext)
  

  const AuthenticatedRoutes = () => 
  <Routes>

    <Route path='/' element={<HomePage/>}/>
    <Route path='/blogs' element={<Blogs3/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/careerroadmap' element={<CareerRoadMap/>}/>
    {/* {isAdmin ?
    <>
      <Route path='/addblogs' element={<AddBlogs/>}/>
    </>: */}
    {/* navigate('/') */}
    {/* } */}

  </Routes>


  const UnauthenticatedRoutes = () => <Routes>
  <Route path="/signup" element={<SignUp />} />
  <Route path="/login" element={<Login />} />
  {/* <Route path="/unauthorized" element={<WrongInput/>} */}
  <Route path="*" element={<SignUp />} />
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
