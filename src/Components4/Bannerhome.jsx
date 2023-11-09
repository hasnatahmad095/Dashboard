import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import img1 from '../DashboardScreenShot-Img/Screenshot 1.png'

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
                        Products
                    </Typography>

                    <Box sx={{
                        flexGrow: 1,
                        marginTop: '20px'
                    }}>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Air Force 1 NDESTRUKT
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_2.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Space Hippie 04
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_3.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Air Force 1 NDESTRUKT
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_4.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Space Hippie 04
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_5.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Air Force 1 NDESTRUKT
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_6.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Space Hippie 04
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_7.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Air Force 1 NDESTRUKT
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_8.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Space Hippie 04
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid><Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_9.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Air Force 1 NDESTRUKT
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_10.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Space Hippie 04
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_11.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Air Force 1 NDESTRUKT
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_12.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Space Hippie 04
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid><Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_13.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Air Force 1 NDESTRUKT
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_14.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Space Hippie 04
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_15.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Air Force 1 NDESTRUKT
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_16.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Space Hippie 04
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid><Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_17.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Air Force 1 NDESTRUKT
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_18.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Space Hippie 04
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_19.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Air Force 1 NDESTRUKT
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_20.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Space Hippie 04
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid><Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_21.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Air Force 1 NDESTRUKT
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_22.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Space Hippie 04
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_23.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Air Force 1 NDESTRUKT
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image='https://minimal-kit-react.vercel.app/assets/images/products/product_24.jpg'
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.black" className='fw-bold'>
                                                Nike Space Hippie 04
                                            </Typography>
                                            <Typography color="text.black" className='fw-bold mt-3'>
                                                $38.70
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>
            </div>
        )
    }
}
