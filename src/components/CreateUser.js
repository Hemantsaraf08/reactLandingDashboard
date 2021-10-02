import React,{useContext} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme} from '@mui/material/styles';
import '../css files/registerpage.css'
import { UserContext } from './AuthProvider';
import { useHistory } from 'react-router-dom'

function CreateUser() {
    const history=useHistory();
    const {currUser, setcurrUser}=useContext(UserContext);
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
                <Button variant="contained" onClick={handleClick} style={{fontFamily: myTheme.typography.fontFamily, boxShadow:'none', borderRadius: '0px'}}>Create Account</Button>
            </div>
        </div>
    )
}

export default CreateUser
