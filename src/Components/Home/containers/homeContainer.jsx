//Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';


const Li= styled.li`
display: inline;
text-align: center;
margin: 0 10px 0 0;

`;



class HomeContainer extends Component {

    render () {
        return (
            <Grid>
                <Jumbotron style = {{backgroundColor: "#005874", color: "#ededed"}} >
                    <Row>
                        <Col xs ={2} xm = {4} className = 'pwerson-wrapper' style = {{marginRight: "1em", marginLeft: "1em"}}>
                            <Li></Li>
                            <h3 style = {{fontFamily: "fantasy", fontWeight: 1000, textAlign: "center"}} >Welcome to Fancy Anime</h3>
                            <h6 style = {{fontFamily: "fantasy", fontWeight: 1000}}>We are the best anime collection figures distribuitor</h6>
                            <Link to = "/About">
                                <button 
                                type="button" 
                                className="btn btn-outline-dark" 
                                style = {{ 
                                    color: "#ededed", 
                                    fontFamily: "fantasy", 
                                    fontWeight: 400, 
                                    marginLeft: "12em",
                                    border: "none"
                                }}
                                >
                                    About us
                                </button>
                            </Link>
                        </Col>
                        <Col >
                            <img 
                            className = "rounded-triangule"
                            src = "http://www.kanpekisetto.com/280178-large_default/rezero-starting-life-in-another-world-figura-nendoroid-rem-10-cm.jpg"
                            style = {{width: "270px", height: "270px", marginLeft: "3em"}}
                            className = "rounded-circle"
                            />
                        </Col>
                    </Row>
                </Jumbotron>
                <Row className = "show-grid text-center">
                    <Col xs={12} sm={4} className ="pwerson-wrapper">
                        <img src = "https://vignette.wikia.nocookie.net/thefanfic/images/d/d6/Moe_170332_ikaros_.jpg/revision/latest?cb=20130421192553&path-prefix=es" 
                        style = {{width: "200", height: "200"}} className = "rounded-circle"/>
                        <h3>Fancy Anime</h3>
                        <p><h2>Enjoy our website and take a break</h2></p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default HomeContainer;