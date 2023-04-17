import React from "react";
import Grid from '@mui/material/Grid';
import CentrifugalPump from '../../assets/images/CentrifugalPump.png';
import V4Pump from '../../assets/images/V4Pump.png';
import SelfPrimingPump from '../../assets/images/SelfPrimingPump.png';
import OpenwellPump from '../../assets/images/OpenwellPump.png';
import IndustrialMotor from '../../assets/images/IndustrialMotors.png';
import './Products.scss';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
// import { useHistory } from "react-router-dom";

const Products = (props) => {
    // const history = useHistory();
    // const handelSelectedProduct = (product) => {
    //     history.push(`product/${product}`)
    // }
    
    const { handelSelectedProduct } = props;
    return (
        <>
            <div className="ourProducts">
                <div className="title">
                    Our Procucts
                </div>
                <div className="productsCards">
                    <Grid container spacing={7}>
                        <Grid item xs={4}>
                            <Card sx={{ maxWidth: 345 }} onClick={() => handelSelectedProduct('openwell')}>
                                <CardMedia
                                    sx={{ height: 230 }}
                                    image={OpenwellPump}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div">
                                        Openwell Pump
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ maxWidth: 345 }} onClick={() => handelSelectedProduct('industrialMotors')}>
                                <CardMedia
                                    sx={{ height: 230 }}
                                    image={IndustrialMotor}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div">
                                        Industrial Motors
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ maxWidth: 345 }} onClick={() => handelSelectedProduct('centrifugalPump')}>
                                <CardMedia
                                    sx={{ height: 230 }}
                                    image={CentrifugalPump}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div">
                                        Centrifugal Pumps
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={2}>

                        </Grid>

                        <Grid item xs={4}>
                            <Card sx={{ maxWidth: 345 }} onClick={() => handelSelectedProduct('V4')}>
                                <CardMedia
                                    sx={{ height: 230 }}
                                    image={V4Pump}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div">
                                        V4 Submersible Pumps
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ maxWidth: 345 }} onClick={() => handelSelectedProduct('selfPriming')}>
                                <CardMedia
                                    sx={{ height: 230 }}
                                    image={SelfPrimingPump}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div">
                                        Self Priming Pumps
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={2}>

                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}
export default Products;