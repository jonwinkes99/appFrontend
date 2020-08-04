import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core"
import Typed from 'react-typed';
import avatar from '../jonpic.jpg'

// CSS STYLES
const useStyles = makeStyles(theme=> ({
    avatar: {
        background: "#494B64",
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: theme.spacing(1)
    },
    title: {
        background: "#494B64",
        color: "black"
    },
    subtitle: {
        background: "#494B64",
        color: "black",
        marginBottom: "8px"
    },
    typedContainer: {
        position: "absolute",
        background: "#494B64",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        textAlign: "center",
        zIndex: "1"
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="Jonathan Winkles"/>
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Jonathan Winkles"]} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h4">
                <Typed strings={["web design", "web development"]} typeSpeed={40} backSpeed={60} loop/>
            </Typography>
        </Box>
    )
}

export default Header
