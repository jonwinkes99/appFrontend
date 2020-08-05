import React, { Component } from 'react';

class BeerItem extends Component {

    state = {
        liked: false
    };

    LikePost = () => this.setState({ liked: !this.state.liked})
        render() {
            return (
                <div style={{
                    border: '1px solid black', 
                    padding: '50px', 
                    fontSize: '23.8px',
                    height: "100%"
                    }}>
                    <p>{this.props.info.name}</p>
                    <span style={{ color: 'tan' }}>{this.props.info.brewers_tips}</span>
             </div>
            )
         }
    
};

export default BeerItem