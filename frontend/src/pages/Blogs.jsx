import {useState , useEffect} from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard'

const Blogs = () => {
  const [blogs , setBlogs] = useState([])
  //get blogs
  const getAllBlogs = async () => {
    try {
      const {data} = await axios.get('/api/blog/all-blog')
      if(data?.success){
        setBlogs(data?.blogs)
      }
    } catch (error) {
      console.log(error)      
    } 
  }
  useEffect(()=>{
    getAllBlogs()
  },[])

  return (
    <>
      {blogs && blogs.map((blog) => (
      <BlogCard 
      isUser={localStorage.getItem('userId') === blog?.user?._id}
      id={blog?._id}
      title = {blog?.title}
      description = {blog?.description}
      image = {blog?.image}
      username= {blog?.user?.username}
      time={blog?.createdAt}
      /> 
      ))}
    </>
  )
}

export default Blogs
