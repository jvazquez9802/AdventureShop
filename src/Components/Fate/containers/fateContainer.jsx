//Dependencies
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Banner from '../../Banner';
import {addToKart} from '../../../Actions/index';

class FateContainer extends Component {

    createListItems(){
        return this.props.figures.map((figure, i) => {
            if(figure.Anime === 'Fate Stay Nigth'){
                return(
                    <Banner 
                        key = {i}
                        img = {figure.img} 
                        Name = {figure.Name} 
                        Price = {figure.Price} 
                        width = '200px'
                        height = '300px'
                        onClick = {() => this.props.addToKart(figure)}
                        alt = {figure.id}
                    />
                );
            }
        });
    }

    render(){
        return(
            <div>
                {this.createListItems()}
            </div>
        );
    }
}

function mapeStateToProps(state){
    return{
        figures: state.figures
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({addToKart: addToKart}, dispatch)
}

export default connect(mapeStateToProps, matchDispatchToProps)(FateContainer);