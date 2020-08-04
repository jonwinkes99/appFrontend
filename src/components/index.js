import React from 'react'
import Particles from 'react-particles-js';
import Navbar from "./Navbar"
import Header from "./Header"
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    particlesCanca: {
        position: "absolute"
    }
})

const Home = () => {
    const classes = useStyles()
    return (
        <div>
            
            <Navbar/>
            <Header/>
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
        </div>
    )
}

export default Home
