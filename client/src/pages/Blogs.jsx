import React, {useState, useEffect} from 'react'
import axios from 'axios';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  //get blogs
  const getAllBlogs = async() => {
    try {
      const{data} = await axios.get('/api/v1/blog/all-blogs')
      if(data && data.success){
        setBlogs(data?.blogs)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getAllBlogs();
  },[])

  return (
    <div>
      {blogs && blogs.map(blog => (
          <BlogCard title={blog.title} description={blog.description} image={blog.image} username={blog.username}/>
      ))}
      
    </div>
  )
}

export default Blogs
