import React, {useState} from 'react'
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from "@material-ui/core"
import {
    ArrowBack,
    AssignmentInd,
    Home,
    ContactMail
} from "@material-ui/icons"
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import GetAppIcon from '@material-ui/icons/GetApp';
import avatar from '../jonpic.jpg'
//import Punk from './Punk'

// CSS styles
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#494B64",
        height:"100%"
    },
    avatar: {
        display: "block",
        margin: "8px auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan"
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts",
        listPath: "/contacts"
    },
    {
        listIcon: <LocalDrinkIcon/>,
        listText: "Beer API",
        listPath: "/Punk"  
    },
    {
        listIcon: <GetAppIcon/>,
        listText: "Login Demo",
        listPath: "/login"   
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })
    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open })
    }
    const classes = useStyles()
    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
        <Avatar className={classes.avatar} src={avatar} alt="Jonathan Winkles"/>
        <Divider/>
        <List>
            {menuItems.map((lsItem, key)=>(
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                    <ListItemIcon className={classes.listItem}>{lsItem.listIcon}
                    </ListItemIcon>
                    <ListItemText className={classes.listItem} primary={lsItem.listText}
                    />
                </ListItem>
            ))}
            
        </List> 
        </Box>  
    )
    return (
        <>
        
        <Box component="nav">
          <AppBar position="static" style={{background: "#111"}}>
              <Toolbar>
                <IconButton onClick={toggleSlider("right", true)}>
                  <ArrowBack style={{color: "#4E538F"}}/>
                </IconButton>
                <Typography variant="h5">
                    Menu
                </Typography>
                <MobilRightMenuSlider onClose={"right", false} anchor="right" open={state.right}>
                    {sideList("right")}
                </MobilRightMenuSlider>
              </Toolbar>
            </AppBar>  
        </Box>
        </>
    )
}

export default Navbar
 