import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Box} from "@material-ui/core";
import Navbar from "./Navbar"
import Particles from 'react-particles-js';

const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: "#494B64",
        height: "920px"
    },
    particlesCanca: {
        position: "absolute",
        justifyContent: "center"
    },
    timeLine: {
        position: "relative",
        padding: "16px",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid black",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "32px",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: { 
       padding: "16px",
       borderBottom: " 2px solid tan",
       position: "realtive",
       margin: "16px 48px 16px 16px",
       clear: "both",
       "&:after": {
           content: "''",
           position: "absolute"
       },
       "&:before": {
           // create red arrow
        // content: "''",
        // position: "absolute",
        // right: "1010px",
        // top: "calc(50% - 5px)",
        // borderStyle: "solid",
        // borderColor: "red red transparent transparent",
        // borderWidth: "10px",
        // transform: "rotate(45deg)"
    },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "16px",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "16px",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-10px",
                borderColor: "transparent transparent red red"
            }
        } 
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "156px",
        margin: "0 3rem 0 auto",
        fontSize: "28.8px",
        background: "black",
        color: "tomato",
        lineHeight: 1,
        padding: "8px 0 16px",
        "&:before": {
            display: "none"
        },
            [theme.breakpoints.up("md")]: {
                textAlign: "center",
                margin: "0 auto",
                "&:nth-of-type(2n)": {
                    float: "none",
                    margin: "0 auto"
                },
                "&:nth-of-type(2n):before": {
                    display: "none"
                }
            }
    },
    heading: {
        color: "tan",
        padding: "48px 0",
        textTransform: "uppercase"
    },
    subHeading:{
        color: "tan",
        padding: "0",
        textTransform: "uppercase"
    }
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
        <Navbar/>
        <Box component="header" className={classes.mainContainer}>
        <Particles 
            canvasClassName={classes.particlesCanca}
                params={{
                    particles: {
                        number:{
                            value: 45,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "square",
                            stroke: {
                                width: 1,
                                color: "tan"
                            }
                        } 
                    }
                }}
            />
            <Typography variant="h4" align="center" className={classes.heading}>
                Experience
            </Typography>
            <Box component="div" className={classes.timeLine}>
                <Typography 
                variant="h2" 
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2017
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography 
                    variant="h5" 
                    align="center" 
                    className={classes.subHeading}>
                        Apprentice Electrician
                    </Typography>
                    <Typography variant="body1" align="center">
                        Genesis Electric 
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: "tomato"}}>
                        switching out plugs, light switches, fans, and basic electrical work.
                    </Typography>
                </Box>
                <Typography 
                variant="h2" 
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2019
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography 
                    variant="h5" 
                    align="center" 
                    className={classes.subHeading}>
                        Bus boy
                    </Typography>
                    <Typography variant="body1" align="center">
                        Pappadeaux Seafood Kitchen
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: "tomato"}}>
                        I cleaned dishes, tables, and chairs
                    </Typography>
                </Box>
                <Typography 
                variant="h2" 
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography 
                    variant="h5" 
                    align="center" 
                    className={classes.subHeading}>
                        Web design and development
                    </Typography>
                    <Typography variant="body1" align="center">
                        Student of Technology 
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: "tomato"}}>
                        Hey, check out my portfolio!
                        https://github.com/jonwinkes99
                    </Typography>
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Resume

