import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'

const CreateBlog = () => {
    const id = localStorage.getItem('userId')
    const navigate = useNavigate()
    const [inputs , setInputs] = useState({
        title : "",
        description : "",
        image : "",
    })

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
        const {data} = await axios.post('/api/blog/create-blog' , {title : title, description:description , image : image , user : id}  )
        if(data?.success){
            toast.success("BLog Created")
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
                variant='h3' 
                textAlign={'center'} 
                fontWeight={'bold'} 
                padding={3} 
                color={'gray'}>
                    
                Create a Blog
            </Typography>
            <InputLabel 
                sx={{ fontSize :'20px', fontWeight : "bold"}}>
                    Title
                </InputLabel>
                <TextField value={title} name='title' onChange={handlChange} margin="normal" variant="outlined" required/>

                <InputLabel 
                sx={{fontSize:'20px',fontWeight:"bold"}}>
                    Desciption
                </InputLabel>
                <TextField value={description} name='description' onChange={handlChange} margin="normal" variant="outlined" required/>

                <InputLabel 
                sx={{fontSize:'20px',fontWeight:"bold"}}>
                    Image URL
                </InputLabel>
                <TextField value={image} name='image' onChange={handlChange} margin="normal" variant="outlined" required/>

            <Button onClick={handleSubmit} type='submit' color='primary' variant='contained'>Submit</Button>
        
        </Box>
      </form>
    </>
  )
}

export default CreateBlog
