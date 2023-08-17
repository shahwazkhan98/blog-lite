import {useState , useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'

const BlogDetails = () => {
    const [blog , setBlog] = useState({})
    const id = useParams().id
    const navigate = useNavigate()
    const [inputs , setInputs] = useState({})

    //get blog details
    const getBlogDetail = async() => {
        try {
            const {data} = await axios.get(`/api/blog/get-blog/${id}`)
            if(data?.success){
                setBlog(data?.blog)
                setInputs({
                    title : data?.blog.title,
                    description : data?.blog.description,
                    image : data?.blog.image,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getBlogDetail()
    },[id])
   

    const {title , description , image} = inputs

    const handlChange = (e) => {
        setInputs((prevState) =>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
       try {
        const {data} = await axios.put(`/api/blog/update-blog/${id}`,{title : title, description:description , image : image , user : id}  )
        if(data?.success){
            toast.success("BLog Updated")
            navigate('/my-blogs')
        }
    } catch (error) {
        console.log(error)
       }
    }
    return (
    <>
   <form>
        <Box 
            width={'40%'} 
            border={3} 
            borderRadius={10} 
            padding={3} 
            margin="auto"   
            boxShadow={'10px 10px 20px #ccc'} display={"flex"} 
            flexDirection={'column'}
            marginTop='30px'
            >

            <Typography 
                variant='h2' 
                textAlign={'center'} 
                fontWeight={'bold'} 
                padding={3} 
                color={'gray'}>
                    
                Update a Post
            </Typography>
            <InputLabel 
                sx={{ mb : 1, mt : 2, fontSize :'24px', fontWeight : "bold"}}>
                    Title
                </InputLabel>
                <TextField value={title} name='title' onChange={handlChange} margin="normal" variant="outlined" required/>

                <InputLabel 
                sx={{mb:1,mt:2,fontSize:'24px',fontWeight:"bold"}}>
                    Desciption
                </InputLabel>
                <TextField value={description} name='description' onChange={handlChange} margin="normal" variant="outlined" required/>

                <InputLabel 
                sx={{mb:1,mt:2,fontSize:'24px',fontWeight:"bold"}}>
                    Image URL
                </InputLabel>
                <TextField value={image} name='image' onChange={handlChange} margin="normal" variant="outlined" required/>

            <Button onClick={handleSubmit} type='submit' color='warning' variant='contained'>Update</Button>
        
        </Box>
      </form>
    </>
  )
}

export default BlogDetails
