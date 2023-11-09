import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ImageListItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

export default class Headernavbar extends Component {
    render() {
        return (
            <div>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar component="nav" sx={{
                        width: '79%',
                        height: '90px',
                        display: 'flex',
                        justifyContent: 'center',
                        background: 'rgba(255,255,255,0.8)',
                        backdropFilter: 'blur(1px)',
                        padding: '0 25px',
                        boxShadow:'0px 0px 0px 0px white'

                    }}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'black' }}
                            >
                               <SearchIcon/>
                            </Typography>
                            <Box sx={{
                                width: '130px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                color: '#000',
                            }} >
                                <ImageListItem sx={{
                                    width: '30px',
                                    borderRadius: '50px',
                                }}>
                                    <img
                                        src={"https://minimal-kit-react.vercel.app/assets/icons/ic_flag_en.svg"}
                                    />
                                </ImageListItem>
                                <p><NotificationsIcon sx={{
                                     color: '#637381', 
                                     marginTop:'15px',
                                }} /></p>
                                <ImageListItem sx={{
                                    width: '40px',
                                    borderRadius: '50px',
                                    overflow: 'hidden',
                                }}>
                                    <img
                                        src={"https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_default.jpg"}
                                    />
                                </ImageListItem>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Box component="nav">
                        <Drawer
                            // container={container}
                            variant="temporary"
                            // open={mobileOpen}
                            // onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none', background: 'red', },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', },
                            }}
                        >
                            {/* {drawer} */}
                        </Drawer>
                    </Box>
                </Box>
            </div>
        )
    }
}
