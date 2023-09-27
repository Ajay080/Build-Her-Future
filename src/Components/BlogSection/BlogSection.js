import React from 'react'
import './BlogSection.css'
import logo from '../../Img/companylogo1.png'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { ImCross} from 'react-icons/im';
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider'
import {BiEdit} from 'react-icons/bi'


const BlogSection = () => {
  const [data, setData] = useState([""]);
  const {token ,isAdmin}=useContext(AuthContext);
  const [isEdit, setEdit]= useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const fetchData= async(page)=>{
    try{
      const response=await axios.get(`https://builherfuturebackend.onrender.com/addblogs/getpost?page=${page}`);
      setData(response.data.jobCards);
      setTotalPages(response.data.totalPages);
    }
    catch(error){
      console.error('Error fetching data:', error);
    }
  };

  const CrossClick=async(cardId)=>{
    try{
      const response=await axios.delete(`https://builherfuturebackend.onrender.com/addblogs/deletepost/${cardId}`);
      setData(data.filter((card)=>card._id!==cardId));
      console.log("DELETED POST", response)
    }
    catch(e){
      console.log(e)
    }
  }

  const SetThings=async(cardID)=>{
    try{
      setEdit(true);
      setFormData({_id:cardID});
      
    }
    catch(e){
      console(e);
    }
  }

  const [formData, setFormData]=useState({
    _id:"",
    title:"",
    description:"",
    role:"",
    category:"",
    deadline:""

  });

  const handleSubmit = async () => {
      console.log("This is form data "+JSON.stringify(formData, null, 4))
      console.log("ID",formData._id)
      try{
          await axios.patch(`https://builherfuturebackend.onrender.com/addblogs/editpost/${formData._id}`,formData
        ,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
      } catch (error) {
         
          console.log("MILO",error)

      }
      setEdit(false)
      setFormData({
        _id:"",
        title:"",
        description:"",
        role:"",
        deadline:"",
        category:"",
      });
		}
		
  

  const handleInputChange = ({ currentTarget: input }) => {
		setFormData({ ...formData, [input.name]: input.value });
	};

  const getDate=(dateTimeString)=>{
    const dateTime = new Date(dateTimeString);

    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1; // Months are zero-based, so we add 1
    const day = dateTime.getDate();
    
    const hours = dateTime.getUTCHours();
    const minutes = dateTime.getUTCMinutes();
    const seconds = dateTime.getUTCSeconds();
    
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // console.log("Formatted Date:", formattedDate); // Output: "2023-08-02"
    // console.log("Formatted Time:", formattedTime); // Output: "00:00:00"
    return formattedDate+" "+formattedTime;
  }
  useEffect(()=>{
    fetchData(currentPage);
    
  },[handleSubmit, currentPage]);

  return (
    <>
    <ul className="jobSection">
      {data.map((e) => (     
        <li key={e._id} className="card">
          <div className="card-top">
            <div className="card-top-left">
              <div className="card-img-logo">
                <img src={logo} alt="comp"></img>
              </div>
              {isEdit && e._id === formData._id ?
                      <input
                      type="text"
                      name="title"
                      className="blog_edit_input"
                      required
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Company Name" 
                    />:
              <h2 className="card-top-head">{e.title}</h2>
              }
            </div>
            <div className="card-top-right">
              {isAdmin?<button style={{marginRight:"4px", backgroundColor:"red"}} onClick={()=>CrossClick(e._id)}><ImCross/></button>:null}
              {isAdmin?<button style={{marginRight:"4px", backgroundColor:"rgb(149, 199, 255)"}} onClick={()=> SetThings(e._id)} ><BiEdit/></button>:null}
              <button><a href={e.url}>Apply</a></button>
            </div>
          </div>
          <div className="card-middle">
            <strong className="card-middle-head">Description</strong>
            {isEdit && e._id === formData._id ? <input
                      type="text"
                      name="description"
                      className="blog_edit_input"
                      required
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Description" 
                    />:
            <p>{e.description}</p>}
            {isEdit && e._id === formData._id ? <button type='submit' onClick={handleSubmit}>Save</button>:null}
          </div>
          <div className="card-bottom">
            <div className="card-bottom-left">
            {isEdit && e._id === formData._id ? <input
                      type="text"
                      name="role"
                      className="blog_edit_input"
                      required
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder="role" 
                    />:
              <p className="card-bottom-head">Role: {e.role} </p>}
            </div>
            <div className="card-bottom-right">
            {isEdit && e._id === formData._id ? <input
                      type="text"
                      name="category"
                      className="blog_edit_input"
                      required
                      value={formData.category}
                      onChange={handleInputChange}
                      placeholder="Category" 
                    />:
              <p className="card-bottom-head">Category: {e.category}</p>}
             {isEdit && e._id === formData._id ? <input
                      type="date"
                      name="deadline"
                      className="blog_edit_input"
                      required
                      value={formData.deadline}
                      onChange={handleInputChange}
                      placeholder="deadline" 
                    />:
              <p className="card-bottom-head">Deadline :{getDate(e.deadline)}</p>}
            </div>
          </div>
        </li>
      ))}
    </ul>
    <div className='pagination'>
    <button onClick={prevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
    </>
  )
}

export default BlogSection