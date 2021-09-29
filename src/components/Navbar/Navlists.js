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
export default function Navlists() {
    const [sb_gettingStartedopen, setsb_gettingStartedopen] = React.useState(false);
    const [sb_locationopen, setsb_locationopen] = React.useState(false);
    const [sb_discoveropen, setsb_discoveropen] = React.useState(false);
    const discoverList = (
        <>
            <ListItemButton onClick={() => setsb_discoveropen(!sb_discoveropen)}>
                <ListItemIcon>
                    <ReadMoreIcon />
                </ListItemIcon>
                <ListItemText primary="Discover More" />
                {sb_discoveropen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={sb_discoveropen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        ["Vision", "Showcase", "Roadmap", "Sponcers", "Team"].map((item, index) => (
                            <ListItemButton key={index} sx={{ pl: 4 }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Collapse>
        </>
    )
    const locationsList = (
        <>
            <ListItemButton onClick={() => setsb_locationopen(!sb_locationopen)}>
                <ListItemIcon>
                    <RoomIcon />
                </ListItemIcon>
                <ListItemText primary="Locations" />
                {sb_locationopen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={sb_locationopen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        ["Center1", "Center2", "Center3", "Center4"].map((item, index) => (
                            <ListItemButton key={index} sx={{ pl: 4 }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Collapse>
        </>
    )
    const gettingStartedList = (
        <>
            <ListItemButton onClick={() => setsb_gettingStartedopen(!sb_gettingStartedopen)}>
                <ListItemIcon>
                    <TextSnippetIcon />
                </ListItemIcon>
                <ListItemText primary="Getting Started" />
                {sb_gettingStartedopen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse style={{backgroundColor: '#faf7f7' }}in={sb_gettingStartedopen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        ["Usage", "Examples", "Support", "FAQs"].map((item, index) => (
                            <ListItemButton key={index} sx={{ pl: 4 }}>
                                <ListItemText primary={item} />
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

