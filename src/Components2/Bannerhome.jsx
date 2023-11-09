import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from '../DashboardScreenShot-Img/Screenshot 9.png'
import img2 from '../DashboardScreenShot-Img/Screenshot 10.png'

export default class Bannerhome extends Component {
    render() {
        return (
            <div>
                <Box component="main" sx={{
                    pt: 15,
                    pb: 5,
                    paddingLeft: '320px',
                }}>
                    <Box sx={{
                        flexGrow: 1,
                    }}>
                        <AppBar position="static" sx={{
                            background: 'transparent',
                            boxShadow: 0
                        }}>
                            <Toolbar>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black', }}>
                                    User
                                </Typography>
                                <Button variant="contained">+ New User</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>

                    <Box sx={{ flexGrow: 1, paddingRight:4 }}>
                        <Grid>
                            <Grid item xs={8}>
                                <ImageListItem>
                                    <img
                                        src={img1}
                                    />
                                </ImageListItem>
                            </Grid>
                            <Grid item xs={4} sx={{mt:'-1px'}}>
                                <ImageListItem>
                                    <img
                                        src={img2}
                                    />
                                </ImageListItem>
                            </Grid>

                        </Grid>
                    </Box>


                </Box>
            </div>
        )
    }
}
