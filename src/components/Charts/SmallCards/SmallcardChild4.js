import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './smallcardstyles.css';
function SmallcardChild4({recoveryRate, recoveredToday}) {

    return (
        <Card className='smallcard-card'> 
            <CardContent className='smallcard-content'>
                <Typography variant='h6' gutterBottom={true} className='smallcard-primary-label'>
                    RECOVERY RATE
                </Typography>
                <Typography variant='h3' ccomponent='div' style={{color: 'black'}}>
                    {recoveryRate}
                <Typography variant='h4'component='span'>%</Typography>
                </Typography>
                <Divider className='smallcard-secondary-divider'>
                    <Typography className='smallcard-secondary-label'>RECOVERED TODAY</Typography>
                </Divider>
                <Typography variant='h5' className='smallcard-secondary-number'>{recoveredToday}</Typography>
            </CardContent>
        </Card>
    )
}

export default SmallcardChild4