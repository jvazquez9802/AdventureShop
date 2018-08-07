import React, { Component } from 'react';

class Banner extends Component {

    render() {
        return (
            <div>
                <img width = {this.props.width} height = {this.props.height} src = {this.props.img} alt = {this.props.alt}/>
                <h3>{this.props.Name}</h3>
                <h4>price: ${this.props.Price} </h4>
                <button type="button" onClick = {this.props.onClick}>Add to Kart</button>
            </div>
        );
    }
}

export default Banner;