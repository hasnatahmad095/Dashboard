import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';
import WindowIcon from '@mui/icons-material/Window';
import PestControlIcon from '@mui/icons-material/PestControl';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from '../DashboardScreenShot-Img/Screenshot 1.png'
import img2 from '../DashboardScreenShot-Img/Screenshot 2.png'
import img3 from '../DashboardScreenShot-Img/Screenshot 3.png'
import img4 from '../DashboardScreenShot-Img/Screenshot 4.png'
import img5 from '../DashboardScreenShot-Img/Screenshot 5.png'
import img6 from '../DashboardScreenShot-Img/Screenshot 6.png'
import img7 from '../DashboardScreenShot-Img/Screenshot 7.png'
import img8 from '../DashboardScreenShot-Img/Screenshot 8.png'

export default class Bannerhome extends Component {
    render() {
        return (
            <div>
                <Box component="main" sx={{
                    p: 5,
                    paddingLeft: '320px',
                }}>
                    <Toolbar />
                    <Typography variant='h5' sx={{ fontWeight: 'bold', }}>
                        Hi, Welcome back
                    </Typography>
                    <Box sx={{
                        width: '100%',
                        marginTop: '45px',
                    }}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={3}>
                                <Box
                                    sx={{
                                        height: '250px',
                                        backgroundColor: '#D2E9FB',
                                        borderRadius: '20px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'space-evenly'
                                    }}
                                >
                                    <AdbIcon sx={{
                                        width: '65px',
                                        height: '65px',
                                        borderRadius: '50px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: '#BED3EF',
                                        color: '#0C2B64',
                                        padding: '20px',
                                    }} />
                                    <Typography variant='h4' sx={{
                                        fontWeight: 'bold',
                                        color: '#0C2B64',
                                    }}>
                                        714k
                                    </Typography>
                                    <p>Weekly Sales</p>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box
                                    sx={{
                                        height: '250px',
                                        backgroundColor: '#D0F2FC',
                                        borderRadius: '20px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'space-evenly'
                                    }}
                                >
                                    <AppleIcon sx={{
                                        width: '65px',
                                        height: '65px',
                                        borderRadius: '50px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: '#B6D3F1',
                                        color: '#0C54B7',
                                        padding: '20px',
                                    }} />
                                    <Typography variant='h4' sx={{
                                        fontWeight: 'bold',
                                        color: '#0C2B64',
                                    }}>
                                        1.35m
                                    </Typography>
                                    <p>New Users</p>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box
                                    sx={{
                                        height: '250px',
                                        backgroundColor: '#FFF7CD',
                                        borderRadius: '20px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'space-evenly'
                                    }}
                                >
                                    <WindowIcon sx={{
                                        width: '65px',
                                        height: '65px',
                                        borderRadius: '50px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: '#F5E6B6',
                                        color: '#B78338',
                                        padding: '20px',
                                    }} />
                                    <Typography variant='h4' sx={{
                                        fontWeight: 'bold',
                                        color: '#B78338',
                                    }}>
                                        1.72m
                                    </Typography>
                                    <p>Item Orders</p>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box
                                    sx={{
                                        height: '250px',
                                        backgroundColor: '#FFE7D9',
                                        borderRadius: '20px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'space-evenly'
                                    }}
                                >
                                    <PestControlIcon sx={{
                                        width: '65px',
                                        height: '65px',
                                        borderRadius: '50px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: '#F5CBC1',
                                        color: '#B73137 ',
                                        padding: '20px',
                                    }} />
                                    <Typography variant='h4' sx={{
                                        fontWeight: 'bold',
                                        color: '#B73137 ',
                                    }}>
                                        234
                                    </Typography>
                                    <p>Bug Reports</p>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{
                        flexGrow: 1,
                        marginTop:'25px',
                    }}>
                        <Grid container spacing={3}>
                            <Grid item lg={8}>
                                <Box sx={{
                                    boxShadow: '0px 0px 20px 5px rgba(0,0,0,0.1)'
                                }}>
                                    <ImageListItem>
                                        <img
                                            src={img1}
                                        />
                                    </ImageListItem>
                                </Box>
                            </Grid>
                            <Grid item lg={4}>
                                <Box sx={{
                                    boxShadow: '0px 0px 20px 5px rgba(0,0,0,0.1)'
                                }}>
                                    <ImageListItem>
                                        <img
                                            src={img2}
                                        />
                                    </ImageListItem>
                                </Box>
                            </Grid>
                            <Grid item lg={8}>
                                <Box sx={{
                                    boxShadow: '0px 0px 20px 5px rgba(0,0,0,0.1)'
                                }}>
                                    <ImageListItem>
                                        <img
                                            src={img3}
                                        />
                                    </ImageListItem>
                                </Box>
                            </Grid>
                            <Grid item lg={4}>
                                <Box sx={{
                                    boxShadow: '0px 0px 20px 5px rgba(0,0,0,0.1)'
                                }}>
                                    <ImageListItem>
                                        <img
                                            src={img4}
                                        />
                                    </ImageListItem>
                                </Box>
                            </Grid>
                            <Grid item lg={8}>
                                <Box sx={{
                                    boxShadow: '0px 0px 20px 5px rgba(0,0,0,0.1)'
                                }}>
                                    <ImageListItem>
                                        <img
                                            src={img5}
                                        />
                                    </ImageListItem>
                                </Box>
                            </Grid>
                            <Grid item lg={4}>
                                <Box sx={{
                                    boxShadow: '0px 0px 20px 5px rgba(0,0,0,0.1)'
                                }}>
                                    <ImageListItem>
                                        <img
                                            src={img6}
                                        />
                                    </ImageListItem>
                                </Box>
                            </Grid>
                            <Grid item lg={4}>
                                <Box sx={{
                                    boxShadow: '0px 0px 20px 5px rgba(0,0,0,0.1)'
                                }}>
                                    <ImageListItem>
                                        <img
                                            src={img7}
                                        />
                                    </ImageListItem>
                                </Box>
                            </Grid>
                            <Grid item lg={8}>
                                <Box sx={{
                                    boxShadow: '0px 0px 20px 5px rgba(0,0,0,0.1)'
                                }}>
                                    <ImageListItem>
                                        <img
                                            src={img8}
                                        />
                                    </ImageListItem>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
        )
    }
}
