import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const {children} = this.props;
    return (
      <div style={{backgroundColor: "#005874"}}>
        <div className="container" style = {{backgroundColor: "005874"}}>
          <Header />
        </div>
        <div className="container-fluid" style = {{backgroundColor: "white"}}>
        <hr/>
          <Content body = {children} />
        </div>
      </div>
    );
  }
}

export default App;
