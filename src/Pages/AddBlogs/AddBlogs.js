import React, { useState } from 'react'
import './AddBlogs.css'
import axios from 'axios';
import { AuthContext } from '../../AuthProvider'
import { useContext } from 'react'
// import { response } from 'express';


const AddBlogs = () => {
  const{token}=useContext(AuthContext);
  const [formData, setFormData]=useState({
    title:"",
    description:"",
    role:"",
    category:"",
    url:"",
    deadline:"",
    time:""
  });

  // const handleSubmit=async (e)=>{
  //   e.preventDefault();
    // try{
    //   console.log(formData);
    // }
    // if (response.ok) {
    //   console.log('Form submitted successfully');
    // } else {
    //   console.error('Form submission failed');
    // }
  // catch (error) {
  //   console.error('Error submitting form', error);
  // }
  // }
  const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        console.log("This is form data "+JSON.stringify(formData, null, 4))
        const {setFormData:res} = await axios.post(`http://localhost:8000/addblogs/newpost`,formData,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })

        // console.log("This is form data "+formData)
        console.log(res.message)
      
      } catch (error) {
         
          console.error(error)

      }
      setFormData({
        title:"",
        description:"",
        role:"",
        url:"",
        deadline:"",
        category:"",
        time:""
      });
		}
		

  const handleInputChange = ({ currentTarget: input }) => {
		setFormData({ ...formData, [input.name]: input.value });
	};

  return (
    <div>
      <form onSubmit={handleSubmit} className="BlogForm">
       <div className="rest">
       <div className="blog_form_left">
        <input
          type="text"
          name="title"
          className="blog_input"
          required
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Compnay Name" 
        />

        <input
          type="text"
          name="description"
          required
          className="blog_input"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Description" 
        />

        <input
          type="text"
          name="role"
          required
          className="blog_input"
          value={formData.role}
          onChange={handleInputChange}
          placeholder="role" 
        />       
      </div> 
      <div className="blog_form_right"> 
        <div className="blog_form_right_top">
          <input
            type="text"
            name="category"
            className="blog_input"
            value={formData.category}
            onChange={handleInputChange}
            placeholder="Category" 
          />

          <input
            type="text"
            name="url"
            required
            className="blog_input"
            value={formData.url}
            onChange={handleInputChange}
            placeholder="Application link" 
          />    
        </div>
        <div className="blog_form_right_bottom">

        <input
          type="date"
          name="deadline"
          required
          className="blog_input blog_input_bottom"
          value={formData.deadline}
          onChange={handleInputChange}
          placeholder="DD-MM-YYYY" 
        />  

        <input
          type="time"
          name="time"
          required
          className="blog_input blog_input_bottom"
          value={formData.time}
          onChange={handleInputChange}
          placeholder="HH:MM" 
        />  

        </div>
        </div>

        </div>
        <div className="blog_submit_div">
        <button type="submit" className="blog_submit">submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddBlogs