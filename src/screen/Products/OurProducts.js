import React, { useEffect } from "react";
import ProductCards from "./ProductCards";
import data from "./ProductCardsData";
import './ProductCards.scss'
import { Grid } from "@mui/material";
const OurProcucts = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="ourProducts">
                <ProductCards />


                <div className="COMPart">
                    <div className="COMHeading">
                        Construction Of Materials
                    </div>
                    <div className="COMContainer">
                        <div className="COM">
                            <div className="title">Pump Body: </div>
                            <div className="COMdesc">Fe 200/240 Cast Iron</div>
                        </div>

                        <div className="COM">
                            <div className="title">Motor Body: </div>
                            <div className="COMdesc">Extruded Aluminum/ Aluminum Die Cast</div>
                        </div>

                        <div className="COM">
                            <div className="title">Impeller: </div>
                            <div className="COMdesc">Noryl/ Derlin/ Forged Brass</div>
                        </div>

                        <div className="COM">
                            <div className="title">Shaft: </div>
                            <div className="COMdesc">EN B/ SS(on request)</div>
                        </div>

                        <div className="COM">
                            <div className="title">Motor: </div>
                            <div className="COMdesc">TEFC motor with TOP(Thermal Overload Protection)</div>
                        </div>

                        <div className="COM">
                            <div className="title">Insulation: </div>
                            <div className="COMdesc">Class B</div>
                        </div>

                        <div className="COM">
                            <div className="title">Bearing: </div>
                            <div className="COMdesc">High Quality Brand</div>
                        </div>

                        <div className="COM">
                            <div className="title">Stamping: </div>
                            <div className="COMdesc">CRCA - LC Steel</div>
                        </div>

                        <div className="COM">
                            <div className="title">Winding: </div>
                            <div className="COMdesc">Copper Wire Windings.</div>
                        </div>
                    </div>
                </div>

                <div className="feature">
                    <div className="COMHeading">
                        Features
                    </div>
                    <div className="featuresContainer">
                        <Grid container spacing={7}>
                            <Grid item xs={4}>
                                <div className="featuresLable">
                                    No suction
                                </div>
                            </Grid>

                            <Grid item xs={4}>
                                <div className="featuresLable">
                                    Noiseless Operation
                                </div>
                            </Grid>

                            <Grid item xs={4}>
                                <div className="featuresLable">
                                    No priming problems
                                </div>
                            </Grid>

                            <Grid item xs={2}>

                            </Grid>

                            <Grid item xs={4}>
                                <div className="featuresLable">
                                    Low Voltage Running
                                </div>
                            </Grid>

                            <Grid item xs={4}>
                                <div className="featuresLable">
                                    High Performance Efficiency
                                </div>
                            </Grid>

                            <Grid item xs={2}>

                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurProcucts;