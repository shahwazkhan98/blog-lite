import {useEffect, useState} from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard'

const UserBlogs = () => {
    const [blogs , setBlogs] = useState([])

    //get user blogs
    const getUserBlogs = async () => {
        try {
            const id = localStorage.getItem('userId')
            const {data} = await axios.get(`/api/blog/user-blog/${id}`)
            if(data?.success){
                setBlogs(data?.userBlogs.blogs)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getUserBlogs()
    },[])
    console.log(blogs)
  return (
    <>
      {blogs && blogs.length > 0 ? (blogs.map((blog) => (
      <BlogCard key={blog._id}
      title = {blog.title}
      description = {blog.description}
      image = {blog.image}
      username= {blog.user.username}
      time={blog.createdAt}
      />))
      )      
      :
      (<h1>You havent Created a blog</h1>)
      
      }
    </>
  )
}

export default UserBlogs
