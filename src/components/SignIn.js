import React,{useContext} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles, useTheme } from '@mui/styles';
import '../css files/registerpage.css'
import { useHistory } from 'react-router-dom'
import { UserContext } from './AuthProvider';
const useStyles = makeStyles(theme => ({
    btn: {
        fontFamily: theme.typography.fontFamily, 
        borderRadius: '0px', 
        boxShadow: 'none'
    }
}))

function SignIn(props) {
    // console.log(props);
    const {setcurrUser}=useContext(UserContext);
    const history=useHistory();
    const classes=useStyles();
    const myTheme = useTheme();
    const handleClick=(e)=>{
        e.preventDefault();
        setcurrUser(1);
        history.push('/dashboard')
    }
    return (
        <div className='register-display-card'>
            <div className='register-title'>
                <Typography style={myTheme.typography} variant="h4">
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

                <Button variant="contained" onClick={handleClick} className={classes.btn}>Sign In</Button>
                <Button variant="contained" className={classes.btn} disabled>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default SignIn
