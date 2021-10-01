import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import RoomIcon from '@mui/icons-material/Room';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import './navliststyle.css'
export default function Navlists() {
    const [sb_gettingStartedopen, setsb_gettingStartedopen] = React.useState(false);
    const [sb_locationopen, setsb_locationopen] = React.useState(false);
    const [sb_discoveropen, setsb_discoveropen] = React.useState(false);
    const discoverList = (
        <>
            <ListItemButton className='nav-list-container' onClick={() => setsb_discoveropen(!sb_discoveropen)}>
                <ListItemIcon className="nav-icon-container">
                    <ReadMoreIcon className="nav-icon"/>
                </ListItemIcon>
                <ListItemText disableTypography className="nav-header-text" primary="Discover More" />
                {sb_discoveropen ? <ExpandLess style={{fill: 'blue'}} /> : <ExpandMore style={{fill: 'blue'}} />}
            </ListItemButton>
            <Collapse in={sb_discoveropen}  style={{backgroundColor: '#fff7f7' }} timeout="auto" unmountOnExit>
                <List component="div" className='navlist-item-container'>
                    {
                        ["Vision", "Showcase", "Roadmap", "Sponcers", "Team"].map((item, index) => (
                            <ListItemButton key={index} className='navlist-item'>
                                <ListItemText className='navlist-item-text' disableTypography primary={item} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Collapse>
        </>
    )
    const locationsList = (
        <>
            <ListItemButton className='nav-list-container' onClick={() => setsb_locationopen(!sb_locationopen)}>
                <ListItemIcon className='nav-icon-container'>
                    <RoomIcon className='nav-icon'/>
                </ListItemIcon>
                <ListItemText disableTypography className='nav-header-text' primary="Locations" />
                {sb_locationopen ? <ExpandLess style={{fill: 'blue'}} /> : <ExpandMore style={{fill: 'blue'}}/>}
            </ListItemButton>
            <Collapse in={sb_locationopen} style={{backgroundColor: '#fff7f7' }} timeout="auto" unmountOnExit>
                <List component="div" className='navlist-item-container'>
                    {
                        ["Center1", "Center2", "Center3", "Center4"].map((item, index) => (
                            <ListItemButton key={index} className='navlist-item'>
                                <ListItemText disableTypography className='navlist-item-text' primary={item} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Collapse>
        </>
    )
    const gettingStartedList = (
        <>
            <ListItemButton  className="nav-list-container" onClick={() => setsb_gettingStartedopen(!sb_gettingStartedopen)}>
                <ListItemIcon className="nav-icon-container">
                    <TextSnippetIcon className="nav-icon"/>
                </ListItemIcon>
                <ListItemText className='nav-header-text' disableTypography primary="Getting Started" />
                {sb_gettingStartedopen ? <ExpandLess style={{fill: 'blue'}}/> : <ExpandMore style={{fill: 'blue'}}/>}
            </ListItemButton>
            <Collapse style={{backgroundColor: '#fff7f7' }}in={sb_gettingStartedopen} timeout="auto" unmountOnExit>
                <List component="div"  className='navlist-item-container'>
                    {
                        ["Usage", "Examples", "Support", "FAQs"].map((item, index) => (
                            <ListItemButton key={index} className='navlist-item'>
                                <ListItemText disableTypography className='navlist-item-text' primary={item} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Collapse>
        </>
    )
    return (
        <>
            {gettingStartedList}
            <Divider />
            {locationsList}
            <Divider />
            {discoverList}
        </>
    )
}

