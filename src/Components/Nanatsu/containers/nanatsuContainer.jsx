//Dependencies
import React, { Component } from 'react';
import Banner from '../../Banner';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addToKart} from '../../../Actions/index';

class NanatsuContainer extends Component {
    
    createListItems(){
        return this.props.figures.map((figure, i) => {
            if(figure.Anime === 'Nanatsu no taizai' && figure.id !== 'Nmer'){
                return(
                    <Banner
                        key = {i}
                        img = {figure.img} 
                        Name = {figure.Name} 
                        Price = {figure.Price} 
                        width = '170px'
                        height = '300px'
                        onClick = {() => this.props.addToKart(figure)}
                        alt = {figure.id}
                     />
                );
            }
            else if(figure.id === 'Nmer'){
                return(
                    <Banner
                        key = {i}
                        img = {figure.img} 
                        Name = {figure.Name} 
                        Price = {figure.Price} 
                        width = '250px'
                        height = '400px'
                        onClick = {() => this.props.addToKart(figure)}
                        alt = {figure.id}
                    />
                );
            }
        });
    }

    render() {
        return (
            <div>
                {this.createListItems()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        figures: state.figures
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({addToKart: addToKart}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(NanatsuContainer);