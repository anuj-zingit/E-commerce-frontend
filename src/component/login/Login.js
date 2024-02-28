import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useContext, useState } from 'react';
import { Dialog, Box, TextField, Typography, Button } from '@mui/material';
import {authenticateLogin, authenticateSignup} from '../../service/Api.js';
import {DataContext} from '../../context/DataProvider';
// import { Button } from 'bootstrap';

function Login({ open, setOpen }) {

    const accountInitialValues = {
        login: {
            view: 'login',
            heading: 'Login',
            subHeading: 'Get access to your Orders, Wishlist and Recommendations'
        },
        signup: {
            view: 'signup',
            heading: "Looks like you're new here",
            subHeading: 'Signup to get started'
        }
    }

    const signupInitialValues={
        firstName:' ',
        lastName:' ',
        userName:'',
        email:'',
        password:'',
        phone:''
    }

    const loginInitialValue={
        email:'',
        password:'',
    }

    // login dialog open
    const [account,setAccount]=useState(accountInitialValues.login)
    // data get from context api
    const {setUser} =useContext(DataContext);
    // signupForm Data
    const[signup,setSignup]=useState(signupInitialValues)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[login,setLogin]=useState(loginInitialValue)
    async function handleLogin(e) {
        let item = { email, password };
        try {
            let result = await fetch("/login", {
                method: 'post',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            })
            console.log(result, "result")
            if (result.ok) {
                console.log('Post request successful');
                // Handle success, e.g., show a success message or redirect
            } else {
                console.error('Post request failed');
                // Handle errors, e.g., show an error message
            }
        } catch (e) {
            console.log(e, "err")
        }
    }
    const handleClose = () => {
        setOpen(false)
        setAccount(accountInitialValues.login);
    }

    const handleSignup=()=>{
        setAccount(accountInitialValues.signup)
    }

    const handleSignupValues=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value})       
    }

    const handleSignupButton=()=>{
        authenticateSignup({...signup})
        console.log({...signup})
       setUser(signup.firstName)
       console.log(signup.firstName)
       handleClose()
        // let responce=await authenticateSignup({...signup})    some changes need
        // if(!responce) return;
        // console.log({...signup})
    }
    const onValueChange=(e)=>{
     setLogin({...login,[e.target.name]:e.target.value})
    }

    const onLogin=async()=>{
       let responce=await authenticateLogin(login)
       handleClose()
    }

    return (
        <>
            <div>

                {/* <Row>
                <h1>login</h1>
                    <Col>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} name='email' onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                    </Col>
                    <Col>
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} type="password" name='password' onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </Col>
                </Row> */}
                {/* <button type='submit' onClick={handleLogin}>Login</button> */}
            </div>
            <Dialog open={open} onClose={handleClose}>
                <Box className='dialogContainer'>
                    <Box className='leftDialog'>
                        <Box className='leftLoginText'>
                            <Typography variant='h5'>{account.heading}</Typography>
                            <Typography>{account.subHeading}</Typography>
                        </Box>
                        <Box>
                            <img src='../../.././Images/DilogLogo.png' alt='logoURL' />
                        </Box>
                    </Box>

                  { account.view==='login'? <Box className='rightDialog'>
                        <TextField className='userName' variant='standard' onChange={onValueChange} name='email' label='Enter Email' /><br />
                        <TextField className='userPassword' variant='standard' onChange={onValueChange} name='password' label='Password' /><br />
                        <Typography className='dialogTest'>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                        <Button onClick={onLogin} className='loginButton'>Login</Button>
                        <Typography className='OrTest'>OR</Typography>
                        <Button className='requestOtp'>Request OTP</Button>
                        <Button onClick={handleSignup}>New to FlipKart? Create an account</Button>
                    </Box>
                    :
                    <Box className='rightDialog'>
                        <TextField className='signupInput' onChange={handleSignupValues} variant='standard' name='firstName' label='First Name' /><br />
                        <TextField className='signupInput' onChange={handleSignupValues} variant='standard' name='lastName' label='Last Name' /><br />
                        <TextField className='signupInput' onChange={handleSignupValues} variant='standard' name='userName' label='User Name' /><br />
                        <TextField className='signupInput' onChange={handleSignupValues} variant='standard' name='email' label='Email' /><br />
                        <TextField className='signupInput' onChange={handleSignupValues} variant='standard' name='password' label='Password' /><br />
                        <TextField className='signupInput' onChange={handleSignupValues} variant='standard' name='phone' label='Phone' /><br />
                        <Button className='signupInput loginButton' onClick={handleSignupButton}>Countinue</Button>
                    </Box>
                    }
                </Box>
            </Dialog>
        </>
    )
}

export default Login
