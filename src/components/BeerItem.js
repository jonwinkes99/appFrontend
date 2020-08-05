import React, { Component } from 'react';
import '../Login.css'

class BeerItem extends Component {
        render() {
            return (
                <div className='mainContainer'>
                    <div style={{
                            border: '1px solid black', 
                            background: "#494B64",
                            padding: '50px', 
                            fontSize: '23.8px'
                        }}>
                        <p>{this.props.info.name}</p>
                        <span style={{ color: 'tan' }}>{this.props.info.brewers_tips}</span>
                    </div>
                </div>
            )
         }
    
};

export default BeerItem