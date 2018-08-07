//Dependencies
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Banner from '../../Banner';

class KartContainer extends Component {
    render() {
        if(!this.props.figures){
            return(
                <p>No tienes productos en tu carrito</p>
            );
        } else {
            return(
                <Banner 
                img = {this.props.figures.img} 
                Name = {this.props.figures.Name}
                Price = {this.props.figures.Price} 
                width = '200px'
                height = '300px'
                onClick = {console.log("Hola")}
                alt = {this.props.figures.id}/>
            );
        }
    }
}

function mapeStateToProps(state){
    return{
        figures: state.inKart
    }
}

export default connect(mapeStateToProps)(KartContainer);