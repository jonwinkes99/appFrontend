import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send"
import Navbar from "./Navbar";

// CSS STYLES



const Contacts = () => {
    return (
        <Box component="div">
            <Grid container justify="center">
               <Box component="form">
                    <Typography variants="h2">
                        Contacts
                    </Typography>  
                    <Typography variants="h5">
                        Email: jwinks18@gmail.com
                    </Typography>
                    <Typography variants="h5">
                        github: https://github.com/jonwinkes99
                    </Typography>
                    <Typography variants="h5">
                        Rocket Chat: @jonathanwinkles-1372
                    </Typography>
                </Box> 
            </Grid>
        </Box>
    )
}

export default Contacts
