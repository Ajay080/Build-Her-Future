import React from 'react'
import './Blog3.css'

import AddBlogs from '../AddJob/AddJob'
import { AuthContext } from '../../AuthProvider'
import { useContext } from 'react'
import BlogSection from '../../Components/BlogSection/BlogSection'

const Blogs3 = () => {
  const {isAdmin}=useContext(AuthContext);
  return (
    <div className="blog3">
      {isAdmin?
        <div className="addBlog">
          <div className="addBlog_head">
            <p>Hi Admin, Please Add new post</p>
          </div>
          <div className="addBlog_main">
            <AddBlogs/>
          </div>
        </div>
        :
        null
      }
      {<BlogSection/>}
    </div>
  )
}

export default Blogs3