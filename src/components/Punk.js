import React, { Component } from 'react'
//import Particles from 'react-particles-js';
//import {makeStyles} from "@material-ui/core/styles";
import BeerItem from './BeerItem';
import Navbar from './Navbar'

// const useStyles = makeStyles(theme=>({
//     mainContainer: {
//         background: "#4E538F",
//         height: "920px"
//     }
// }));


//const classes = useStyles();

class Punk extends Component{
    
    state = {
        beers: []
    };

    fetchBeers = () => {
        fetch('https://api.punkapi.com/v2/beers')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ beers: data })
            });
    };
    render(){
        return (
            <div style={{
                zIndex: 100,
                background: "#494B64",
                textAlign: "center",
                position: "relative"
                 }}>
                <Navbar style={{position: "absolute"}}/>
                <button onClick = {this.fetchBeers} class="button">
                    <span>
                        list beers
                    </span>
                </button>
                <p>
                    {
                        this.state.beers.map(beer => {
                            return <BeerItem key={beer.id} info={beer}/>
                        })
                    }
                </p>
            </div>
        )
    }
}

export default Punk