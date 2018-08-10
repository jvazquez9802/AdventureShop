import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Li= styled.li`
display: inline;
text-align: center;
margin: 0 10px 0 0;

`;



class Header extends Component {
    render() {
        return (
            <nav className="navbar" style={{backgroundColor: "#005874"}}>
                   
                    
                    <div className="container" style = {{backgroundColor: "005874"}}>
                    <a 
                    className="navbar-brand" 
                    style={{color: "#ededed", fontFamily: "fantasy", fontWeight: 900, fontSize: 22}}
                    >
                        Fancy Anime
                    </a>
                    
                            <img 
                                className = "rounded-circle"
                                src="https://vignette.wikia.nocookie.net/soranootoshimono/images/e/ed/Nymph-100.png/revision/latest?cb=20120420122818&path-prefix=es" 
                                width="50" 
                                height="50"
                                alt=""
                                style = {{marginRight: "30em"}}
                            />
                        <div className="row justify-content-md-left"></div>
                        <div className="row justify-content-md-left">
                            <div className="col">
                                <Li>
                                    <Link to = "/">
                                        <button 
                                        type="button"  
                                        className="btn btn-outline-info" 
                                        style = {{color: "#ededed", border: "none", fontFamily: "fantasy", fontWeight: 900 }}
                                        >
                                            Home
                                        </button>
                                    </Link>
                                </Li>
                                <Li>
                                    <Link to = "/Nanatsu">
                                        <button 
                                        type="button" 
                                        className="btn btn-outline-info" 
                                        style = {{color: "#ededed", border: "none", fontFamily: "fantasy", fontWeight: 900}}
                                        >
                                            Nanatsu
                                        </button>
                                    </Link>
                                </Li>
                                <Li>
                                    <Link to = "/Fate">
                                        <button 
                                        type="button" 
                                        className="btn btn-outline-info" 
                                        style = {{color: "#ededed", border: "none", fontFamily: "fantasy", fontWeight: 900}}
                                        >
                                            Fate
                                        </button>
                                    </Link>
                                </Li>
                                <Li>
                                    <Link to = "/Kart">
                                        <button 
                                        type="button" 
                                        className="btn btn-outline-info" 
                                        style = {{color: "#ededed", border: "none", fontFamily: "fantasy", fontWeight: 900}}
                                        >
                                            Kart
                                        </button>
                                    </Link>
                                </Li>
                            </div>
                        </div>
                    </div>
                </nav>
        );
    }
}

export default Header;