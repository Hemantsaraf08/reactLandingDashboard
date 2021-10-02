import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './smallcardstyles.css';
function SmallcardChild1({totalCases, todaysCases}) {

    return (
        <Card className='smallcard-card'>
            <CardContent className='smallcard-content'>
                <Typography variant='h6' gutterBottom={true} className='smallcard-primary-label'>TOTAL CASES</Typography>
                <Typography variant='h3' style={{color: 'black'}} className='smallcard-primary-number'>{Math.round((totalCases*100)/10000000)/100} Cr</Typography>
                <Divider className='smallcard-secondary-divider'><Typography className='smallcard-secondary-label'>TODAY</Typography></Divider>
                <Typography variant='h5'className='smallcard-secondary-number'>{todaysCases}</Typography>
            </CardContent>
        </Card>
    )
}

export default SmallcardChild1
