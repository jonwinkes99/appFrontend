import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Grid, Box} from "@material-ui/core";
import Navbar from "./Navbar";
import Particles from 'react-particles-js';

// CSS STYLES
const useStyles = makeStyles(theme=>({
    mainContainer: {
        backgroundColor: "#494B64",
        height: "950px"
    },
    particlesCanca: {
        position: "absolute",
        justifyContent: "center"
    },
    header: {
        textAlign: "center",
        color: "tomato",
        padding: "48px 0",
        textTransform: "uppercase"
    },
    subHeading:{
        textAlign: "center",
        padding: "48px 20px",
        color: "tan",
        textTransform: "uppercase"
    },
    textInfo: {
        textAlign: "center",
        borderBottom: "1px"
    }
}));


const Contacts = () => {
    const classes = useStyles();
    return (
        <>
        <Navbar/>
        <Box component="div" className={classes.mainContainer}>
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
            <Grid container justify="center">
               <Box component="form">
                    <Typography variants="h2" className={classes.header}>
                        Contacts
                    </Typography> 
                    <Typography variants="h2" className={classes.subHeading}>
                        Email
                    </Typography> 
                    <Typography variants="h5" className={classes.textInfo}>
                        jwinks18@gmail.com
                    </Typography>
                    <Typography variants="h2" className={classes.subHeading}>
                        Github
                    </Typography>
                    <Typography variants="h5" className={classes.textInfo}>
                        https://github.com/jonwinkes99
                    </Typography>
                    <Typography variants="h2" className={classes.subHeading}>
                        Rocket Chat
                    </Typography>
                    <Typography variants="h5" className={classes.textInfo}>
                        @jonathanwinkles-1372
                    </Typography>
                </Box> 
            </Grid>
        </Box>
        </>
    )
}

export default Contacts
