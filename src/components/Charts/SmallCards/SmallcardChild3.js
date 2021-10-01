import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './smallcardstyles.css';
function SmallcardChild3({totalVaccinated, vaccinationrateinc}) {

    return (
        <Card>
            <CardContent>
                <Typography variant='h6' gutterBottom={true} className='smallcard-primary-label'>TOTAL VACCINE DOSE</Typography>
                <Typography variant='h3' style={{color: 'black'}} className='smallcard-primary-number'>{Math.round((totalVaccinated*100)/10000000)/100} Cr</Typography>
                <Divider className='smallcard-secondary-divider'/>
                <div style={{display: "flex","alignItems": "center"}}>
                {
                    vaccinationrateinc>0?<ArrowUpwardIcon style={{fontSize: 'medium'}}/>:<ArrowDownwardIcon style={{fontSize: 'medium'}}/>
                }
                <Typography variant='subtitle1' className='smallcard-secondary-number'>{vaccinationrateinc}%&nbsp;</Typography>
                <Typography variant='body2' component='span'> Since last month</Typography>
                {/* <span>  Since Last Month</span> */}
                </div>
            </CardContent>
        </Card>
    )
}

export default SmallcardChild3