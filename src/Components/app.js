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
      <div>
        <Header/>
        <Content body = {children} />
      </div>
    );
  }
}

export default App;
