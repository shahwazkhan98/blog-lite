import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Box , Typography , TextField , Button} from '@mui/material'
import { toast } from 'react-toastify'
import axios from 'axios'
import {useDispatch} from "react-redux"
import { authActions} from '../redux/store'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [userData , setUserData] = useState({
    email : "",
    password : "",
  })

  const {email , password} = userData

  const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }

  // const API_URL = "/api/user/login"

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("/api/user/login",{
        email: email,
        password: password
      })
      if (data.success) {
        localStorage.setItem('userId',data?.user._id)
        dispatch(authActions.login())
        toast.success("User Successfully Login")
        navigate("/")
      }
    } catch (error) 
    {      
      toast.error("Invalid Username or Password")
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
        padding={3} 
        textAlign={"center"}
        > 
          Login
        </Typography>

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
      sx={{ borderRadius: 1 ,
      marginTop : 3 , backgroundColor:"#577783"}}
      variant='contained'
      >
      Submit
      </Button>

  <Button
        onClick={() => navigate('/register')}
        sx={{ borderRadius: 2,
        marginTop : 3}} 
        >
        Not a user ? Please Register
        </Button>
     </Box>
     </form>
    </>
  )
}
export default Login
