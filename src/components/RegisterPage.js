import React, { useState, useContext, useEffect } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory } from 'react-router-dom'
import {  useTheme } from '@mui/styles';
import Button from '@mui/material/Button';
import SignIn from './SignIn';
import CreateUser from './CreateUser';
import Typography from '@mui/material/Typography';
import '../css files/registerpage.css'
import {UserContext} from './AuthProvider' 

// const useStyles = makeStyles((theme) => {
    // console.log(theme.typography.fontFamily);
    // return({
    // root: {
    //   fontFamily: "'Sintony', sans-serif",
    //   color: '#FF0000'
    // },
//   })});


function RegisterPage() {
    const {currUser, setcurrUser}=useContext(UserContext);
    // const classes=useStyles();
    console.log("register comp",currUser)
    useEffect(()=>{
        if(currUser){
            history.push('/')
        }
    },[])
    const myTheme=useTheme();
    // console.log(myTheme)
    // console.log(props)
    const history = useHistory();
    const [selected, changeSelected] = useState('login');
    const handleLoginSelected = () => {
        changeSelected('login');
    }
    const handleSignupSelected = () => {
        changeSelected('signup');
    }
    const handleHomeBtnClick = (e) => {
        e.preventDefault();
        history.push('/');
    }
    const setStyle=(divname)=>{
        if(divname!==selected) {
            return {
                backgroundColor: 'white',
                color: '#004890'
            }
        }else{
            return {
                backgroundColor: '#004890',
                color: 'white'
            }
        }
    }   
    return (
        <div className='register-page'>
            <div className='register-card'>
                <div className='register-actions'>
                    <div style={setStyle('login')}className='login-btn' onClick={handleLoginSelected}>
                        <Typography style={myTheme.typography} variant='h5'>Login</Typography>
                    </div>
                    <div style={setStyle('signup')}className='signup-btn' onClick={handleSignupSelected}>
                        <Typography style={myTheme.typography} variant='h5'>Signup</Typography>
                    </div>
                </div>
                {
                    selected === 'login' ? <SignIn /> : <CreateUser />
                }
                <Button className='back-btn' variant="outlined" startIcon={<ArrowBackIosIcon />} onClick={handleHomeBtnClick}>
                    LANDING PAGE
                </Button>
            </div>
        </div>
    )
}

export default RegisterPage