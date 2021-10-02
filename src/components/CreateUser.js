import React,{useContext} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme, makeStyles } from '@mui/material/styles';
import '../css files/registerpage.css'
import { UserContext } from './AuthProvider';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    btn: {
        fontFamily: theme.typography.fontFamily, 
        borderRadius: '0px', 
        boxShadow: 'none'
    }
}))

function CreateUser() {
    const history=useHistory();
    const {currUser, setcurrUser}=useContext(UserContext);
    console.log('create user: ',currUser);
    const classes=useStyles();
    const myTheme = useTheme();
    const handleClick=(e)=>{
        e.preventDefault();
        setcurrUser(1);
        console.log("create user:",currUser)
        history.push('/dashboard')
    }
    return (
        <div className='register-display-card'>
            <div className='register-title'>
                <Typography style={myTheme.typography} variant="h4">
                    Lucky to have you!
                </Typography>
            </div>
            <div className='register-content'>
                <TextField
                    id="filled-password-input"
                    label="Enter valid email"
                    type="text"
                    variant="outlined"
                    style={{ width: '100%' }}
                    required
                    focused
                />
                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    variant="outlined"
                    style={{ width: '100%' }}
                    required
                />
                <TextField
                    id="filled-password-input"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    style={{ width: '100%' }}
                    required
                />
                <Button variant="contained" onClick={handleClick}className={classes.btn}>Create Account</Button>
            </div>
        </div>
    )
}

export default CreateUser
