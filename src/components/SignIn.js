import React,{useContext} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useTheme } from '@mui/material/styles';
import '../css files/registerpage.css'
import { useHistory } from 'react-router-dom'
import { UserContext } from './AuthProvider';


function SignIn(props) {
    const {setcurrUser}=useContext(UserContext);
    const history=useHistory();
    const myTheme = useTheme();
    const handleClick=(e)=>{
        e.preventDefault();
        setcurrUser(1);
        history.push('/dashboard')
    }
    return (
        <div className='register-display-card'>
            <div className='register-title'>
                <Typography style={{fontFamily: myTheme.typography.fontFamily}} variant="h4">
                    Welcome back!
                </Typography>
            </div>
            <div className='register-content'>
                <TextField
                    id="filled-password-input"
                    label="Enter your email"
                    type="text"
                    variant="outlined"
                    style={{ width: '100%' }}
                    focused
                    required
                />
                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    variant="outlined"
                    style={{ width: '100%' }}
                    required
                />

                <Button variant="contained" onClick={handleClick} style={{fontFamily: myTheme.typography.fontFamily, borderRadius: '0px', boxShadow: 'none' }}>Sign In</Button>
                <Button variant="contained" style={{fontFamily: myTheme.typography.fontFamily, borderRadius: '0px', boxShadow: 'none' }} disabled>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default SignIn
