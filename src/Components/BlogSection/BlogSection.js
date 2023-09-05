import React from 'react'
import './BlogSection.css'
import logo from '../../Img/companylogo1.png'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { ImCross} from 'react-icons/im';
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider'
import {BiEdit} from 'react-icons/bi'
// import e from 'express'

const BlogSection = () => {
  const [data, setData] = useState([]);
  const {token ,isAdmin}=useContext(AuthContext);
  const [isEdit, setEdit]= useState(false);

  // const [title,setTitle]=useState();
  // const [role, setRole]= useState();
  // const [category, setCategory]= useState();
  // const [deadline, SetDeadline]= useState()
  // const data=[
  //   {
  //     "title":"Sheldon jackson",
  //     "role":"Web Developer",
  //     "category":"Full Time",
  //     "lastDate":"3 sep 23",
  //     "description":"this is the description of jackson",
  //   },
  //   {
  //     "title":"Shinendra shinde",
  //     "role":"Web Developer",
  //     "category":"Full Time",
  //     "lastDate":"3 sep 23",
  //     "description":"this is the description of shinde"
  //   },
  //   {
  //     "title":"Sheldon jackson",
  //     "role":"Web Developer",
  //     "category":"Full Time",
  //     "lastDate":"3 sep 23",
  //     "description":"this is the description of jackson",
  //   },
  //   {
  //     "title":"Shinendra shinde",
  //     "role":"Web Developer",
  //     "category":"Full Time",
  //     "lastDate":"3 sep 23",
  //     "description":"this is the description of shinde this is the description of shindethis is the description of shindethis is the description of shinde this is the description of shinde this is the description of shindethis is the description of shindethis is the description of shinde this is the description of shinde this is the description of shindethis is the description of shindethis is the description of shinde this is the description of shinde this is the description of shindethis is the description of shindethis is the description of shinde this is the description of shinde this is the description of shindethis is the description of shindethis is the description of shindethis is the description of shinde this is the description of shindethis is the description of shindethis is the description of shinde this is the description of shinde this is the description of shindethis is the description of shindethis is the description of shindev this is the description of shinde this is the description of shindethis is the description of shindethis is the description of shinde this is the description of shinde this is the description of shindethis is the description of shindethis is the description of shinde this is the description of shinde this is the description of shindethis is the description of shindethis is the description of shinde this is the description of shinde this is the description of shindethis is the description of shindethis is the description of shinde this is the description of shinde this is the description of shindethis is the description of shindethis is the description of shinde v"
  //   },
  // ]
  const fetchData= async()=>{
    try{
      const response=await axios.get(`http://localhost:8000/addblogs/getpost`);
      setData(response.data);
    }
    catch(error){
      console.error('Error fetching data:', error);
    }
  };

  const CrossClick=async(cardId)=>{
    try{
      const response=await axios.delete(`http://localhost:8000/addblogs/deletepost/${cardId}`);
      setData(data.filter((card)=>card._id!==cardId));
      console.log("DELETED POST", response)
    }
    catch(e){
      console.log(e)
    }
  }

  const SetThings=async(cardID)=>{
    // console.log(data({id}))
    try{
      setEdit(true);
      setFormData({_id:cardID});
      
    }
    catch(e){
      console("nhi chal raha kuch", e);
    }
  }

  const [formData, setFormData]=useState({
    // _id:data({_id}),
    // title:data({title}),
    // description:data({description}),
    // role:data({role}),
    // category:data({category}),
    // deadline:data({deadline})
    _id:"",
    title:"",
    description:"",
    role:"",
    category:"",
    deadline:""

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
  const handleSubmit = async () => {
      // e.preventDefault();
      console.log("This is form data "+JSON.stringify(formData, null, 4))
      console.log("ID",formData._id)
      try{
        
        // console.log("This is form data "+JSON.stringify(formData, null, 4))
        await axios.patch(`http://localhost:8000/addblogs/editpost/${formData._id}`,formData
        ,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })


        
        // console.log("This is form data "+formData)
        // console.log(res.message)
      
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

  useEffect(()=>{
    fetchData();
    
  },[handleSubmit]);

  return (
    <ul className="jobSection">
      {data.map((e) => (     
        <li key={e._id} className="card">
          {/* {isEdit? setFormData({_id:e._id}):null} */}
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
              <button><a href="">Apply</a></button>
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
              <p className="card-bottom-head">Deadline : ISODate({e.deadline})</p>}
            </div>
            {/* <div className="card-bottom-right">
              <p className="card-bottom-head">Deadline</p>
              <p><strong>{e.lastDate}</strong></p>
            </div>   */}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default BlogSection