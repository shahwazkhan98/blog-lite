import React, { useState } from 'react'
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'

const CreateBlog = () => {
    const [inputs , setInputs] = useState({
        title : "",
        description : "",
        image : "",
    })

    const handlChange = (e) => {
        setInputs((prevState) =>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs)
    }
    return (
    <>  
      <form>
        <Box 
            width={'50%'} 
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
                    
                Create a Pots
            </Typography>
            <InputLabel 
                sx={{ mb : 1, mt : 2, fontSize :'24px', fontWeight : "bold"}}>
                    Title
                </InputLabel>
                <TextField value={inputs.title} name='title' onChange={handlChange} margin="normal" variant="outlined" required/>

                <InputLabel 
                sx={{mb:1,mt:2,fontSize:'24px',fontWeight:"bold"}}>
                    Desciption
                </InputLabel>
                <TextField value={inputs.description} name='description' onChange={handlChange} margin="normal" variant="outlined" required/>

                <InputLabel 
                sx={{mb:1,mt:2,fontSize:'24px',fontWeight:"bold"}}>
                    Image URL
                </InputLabel>
                <TextField value={inputs.image} name='image' onChange={handlChange} margin="normal" variant="outlined" required/>

            <Button onClick={handleSubmit} type='submit' color='primary' variant='contained'>Submit</Button>
        
        </Box>
      </form>
    </>
  )
}

export default CreateBlog
