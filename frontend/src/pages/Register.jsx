import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Box , Typography , TextField , Button} from '@mui/material'
import { toast } from 'react-toastify'
import axios from 'axios'

 
const Register = () => {
  const navigate = useNavigate()

  const [userData , setUserData] = useState({
    name : "",
    email : "",
    password : ""
  })

  const { name , email , password} = userData
  const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }

  const API_URL = "/api/user/register"

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post( API_URL , {
        username: name,
        email: email,
        password: password
      })
      if (data.success) {
        toast.success("User Successfully Register")
        navigate("/login")
      }
    } catch (error) {
      console.log(error)
    }
  }
   
  return (
    <>
    <form onSubmit={handleSubmit}>
     <Box 
        maxWidth={450} 
        display="flex" 
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        margin={'auto'}
        marginTop={5}
        boxShadow="10px 10px 20px #ccc"
        padding={3}
        borderRadius={5}

     >
<Typography 
        variant='h4' 
        sx={{textTransform : "uppercase"}} 
        padding={3} textAlign={"center"}> 
        Register
        </Typography>
      
<TextField 
        onChange={handleChange}
        placeholder='name' 
        name='name'
        value={name}
        margin='normal'
        type={'text'}
        required
      />

<TextField 
        onChange={handleChange}
        placeholder='email' 
        name='email'
        value={email}
        margin='normal'
        type={'email'}
        required

      />

<TextField 
        onChange={handleChange}
        placeholder='password' 
        name='password'
        value={password}
        margin='normal'
        type={'password'}
        required

      />
     
  <Button 
      type='submit'
      sx={{ borderRadius: 3 ,
      marginTop : 3}}
      variant='contained'
      color="primary">
      Submit
      </Button>

  <Button
        onClick={() => navigate('/login')}
        sx={{ borderRadius: 3,
        marginTop : 3}} 
        >
        Already Registerd ? Please Login
        </Button>
     </Box>
     </form>
    </>
  )
}

export default Register
