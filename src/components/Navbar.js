import React, {useState} from 'react'
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
    ListItemIcon,
    Drawer
} from "@material-ui/core"
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons"
import avatar from '../jonpic.jpg'

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
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts"
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
                <ListItem button key={key}>
                    <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                    <ListItemText className={classes.listItem} primary={lsItem.listText}/>
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
 