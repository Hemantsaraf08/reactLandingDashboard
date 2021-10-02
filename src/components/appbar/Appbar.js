import * as React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Sidebar from '../Navbar/Sidebar'
import { useTheme } from '@mui/material/styles';
import '../Navbar/navbarstyle.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReplayIcon from '@mui/icons-material/Replay';
import vector from '../../svgs/Vector.svg'
import { useHistory } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SmallcardParent from '../Charts/SmallCards/SmallcardParent';
import ChartParent from '../Charts/Chart/ChartParent';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const myTheme = useTheme();
    const history = useHistory();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [mobileMenuOpen, setmobileMenuOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLogout = () => {
        history.push('/');
    }

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(1),
        marginLeft: '1rem',
        width: '25%',
        [theme.breakpoints.down('sm')]: {
            // marginLeft: theme.spacing(3),
            width: 'auto',
            display: 'none'
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const drawer = (
        <div>
            <Toolbar aria-label='app-logo' onClick={() => history.push('/')} style={{ backgroundColor: myTheme.palette.primary.main, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <img src={vector} alt="logo" />
            </Toolbar>
            <Divider />
            <div onClick={() => window.open("https://www.linkedin.com/in/hemant-saraf-80b87b68/", "_blank")} style={{ backgroundColor: '#faf7f7', display: 'flex', alignItems: 'center', padding: '8px 8px', justifyContent: 'center', width: '100%', height: '5rem', cursor: 'pointer' }}>
                <div style={{ width: '30%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'c' }}>
                    <AccountCircleIcon style={{ fontSize: '3.5rem' }} color='primary' />
                </div>
                <div style={{ width: '70%' }}>
                    <div>
                        <Typography color='primary' style={{ fontFamily: myTheme.typography.fontFamily, fontWeight: '600' }} variant='h6'>Hemant Saraf</Typography>
                    </div>
                    <div>
                        <Typography color='primary' style={{ fontFamily: myTheme.typography.fontFamily, fontWeight: '500' }} variant='p'>Admin</Typography>
                    </div>
                </div>
            </div>
            <Divider />
            <Sidebar />
        </div>
    );

    //   const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                style={{ boxShadow: 'none' }}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{ backgroundColor: myTheme.palette.primary.main, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        // sx={{ mr: 2, display: { sm: 'block' } }}
                        className='menu-icon'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{ fontFamily: myTheme.typography.fontFamily, fontWeight: '500' }} sx={{ margin: { sm: '10px', xs: 'auto' } }} variant="h5" noWrap component="div">
                        My Dashboard
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        className='toolbar-icon'
                        onClick={() => window.open("https://github.com/Hemantsaraf08/reactLandingDashboard", "_blank")}
                    >
                        <GitHubIcon style={{ fontSize: '2rem' }} />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => window.open("https://www.linkedin.com/in/hemant-saraf-80b87b68/", "_blank")}
                        className='toolbar-icon'
                    >
                        <LinkedInIcon style={{ fontSize: '2rem' }} />
                    </IconButton>
                    <Tooltip title="Fetch latest data">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            className='toolbar-icon'
                            onClick={() => window.location.reload()}
                        >
                            <ReplayIcon style={{ fontSize: '2rem' }} />
                        </IconButton>
                    </Tooltip>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleLogout}
                        className='toolbar-icon'
                    >
                        <LogoutIcon style={{ fontSize: '2rem' }} />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => setmobileMenuOpen(!mobileMenuOpen)}
                        // style={{display: {mobileOpen}?'none':'block'}}
                        className='menu-icon'
                    >
                        <MoreVertIcon />
                    </IconButton>
                </Toolbar>
                <div className='header-mobile-options' style={{ backgroundColor: myTheme.palette.primary.main, display: mobileMenuOpen ? 'flex' : 'none', justifyContent: 'space-around', alignItems: 'center', position: 'sticky', width: '100%', height: '50px' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => window.open("https://github.com/Hemantsaraf08/reactLandingDashboard", "_blank")}
                    //sx={{ mr: 2, display: { sm: 'block', xs: 'none' } }}
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => window.open("https://www.linkedin.com/in/hemant-saraf-80b87b68/", "_blank")}
                    //sx={{ mr: 2, display: { sm: 'block', xs: 'none' } }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                    <Tooltip title='Fetch latest data'>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={() => window.location.reload()}
                        //sx={{ mr: 2, display: { sm: 'block', xs: 'none' } }}
                        >
                            <ReplayIcon />
                        </IconButton>
                    </Tooltip>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleLogout}
                    // sx={{ mr: 2, display: { sm: 'block', xs: 'none' } }}
                    >
                        <LogoutIcon />
                    </IconButton>
                </div>
            </AppBar>
            <Box
                component="nav"
                sx={{ flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
                className='scrollhost'
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#faf7f7' },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#faf7f7' },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <div className='charts-box' style={{ display: 'flex', flexDirection: 'column' }}>
                <div className='top-div'>
                    <div className='top-div-inner' style={{ paddingLeft: '30px' }}>
                        <Box display={{ xs: "none", sm: "none", md: "block" }}>
                                <Typography variant='h3' style={{ color: 'white' }}>India Covid-19 stats</Typography>
                        </Box>
                        <Box display={{ xs: "none", sm: "block", md: "none" }}>
                                <Typography variant='h4' style={{ color: 'white' }}>India Covid-19 stats</Typography>
                        </Box>
                        <Box display={{ xs: "block", sm: "none", md: "none" }}>
                                <Typography variant='h5' style={{ color: 'white' }}>India Covid-19 stats</Typography>
                        </Box>
                        <Typography style={{ paddingTop: '5px', color: 'beige' }} variant='subtitle1' component='div'>
                            Last data fetched on: {new Date().toString().substring(0, 24)}
                            <Typography className='heading-caption' style={{ marginTop: '-5px', color: 'beige' }} variant='caption'>&nbsp; &nbsp; [Data not for direct inference]</Typography>
                        </Typography>
                    </div>
                </div>
                <Box component="main" sx={{ flexGrow: 1, marginTop: '-5.5rem', padding: "40px 15px 10px 15px", width: { sm: `calc(100vw - ${drawerWidth}px)`, xs: '100vw' }, ml: { sm: `${drawerWidth}px` } }}>
                    <Grid container spacing={3}>
                        <SmallcardParent />
                        <ChartParent />
                        <Grid item xs={12}>
                            <footer className='app-footer'>
                                <Divider />
                                <div className='footer-div'>
                                    <Typography style={{ margin: '0px 16px' }} variant='body1'>Did you Like it?</Typography>
                                    <div className='like-button-container'>
                                        <button style={{ margin: '8px' }} onClick={() => window.open('https://forms.gle/amLF2miJ6QwDt1fK7', '_blank')}>
                                            <ThumbUpAltIcon />;
                                        </button>
                                        <button style={{ margin: '8px' }} onClick={() => window.open('https://forms.gle/amLF2miJ6QwDt1fK7', '_blank')}>
                                            <ThumbDownAltIcon />
                                        </button>
                                    </div>
                                </div>
                            </footer>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Box>
    );
}

export default ResponsiveDrawer;
