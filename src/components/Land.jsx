import React, { Component } from 'react';
import About from './LandingPage/About'
import Introduction from './LandingPage/Introduction'
import Contact from './Contact';

export default class Land extends Component {
  render() {
    return (
      <React.Fragment>
        <About />
        <Introduction />
        <Contact />
      </React.Fragment>
    )
  }
}
