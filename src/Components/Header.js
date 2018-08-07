import React, { Component } from 'react';
/*PropTYpes es una validacion que ayuda a definir que primport PropTypes from 'prop-types';opiedades debemos de recibir, de que tipo y 
ver si son necesarios o requeridas o simplemente se pueden mandar como nulas*/
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


class Header extends Component {
    RouterButtons(){
        return(
            <div>
                <Link to= "/"><button type="button">Inicio</button></Link>
                <Link to= "/Nanatsu"><button type="button">Nanatsu</button></Link>
                <Link to= "/Fate"><button type="button">Fate</button></Link>
                <Link to= "/Kart"><button type="button">Kart</button></Link>
            </div>
        );
    }
    render() {
        return (
            <div>
                <h2>Anime Fancy</h2>
                <header>
            
                </header>
                <li>
                    {this.RouterButtons()}
                </li>
            </div>
        );
    }
}

export default Header;