import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import WhiteLogo from '../img/logo192.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      navExpanded: false
    }
  }

  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }

  closeNav = () => {
    this.setState({ navExpanded: false });
  }
  
  render() {
    const lists = this.props.links.map(link => {
      return (
        <Nav.Link
          key={link.text}
          onClick={() => {this.props.linkToPage(link.type,link.url);this.closeNav()}}
          >{link.text}
        </Nav.Link>
      );
    });
    return (
      <Navbar
        collapseOnSelect
        expand="md"
        bg='white'
        variant="light"
        onToggle={this.setNavExpanded}
        expanded={this.state.navExpanded}
      >
        <Navbar.Brand href="">
          <img src={WhiteLogo} alt='HeaderLogo' onClick={() => this.props.linkToPage('Route','/')}/>
          <span style={{paddingLeft : "5px"}}>Lily's English Webinar</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav >
            {lists}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = ({links,concert}) => {
  return{
    links: links.headerLinks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    linkToPage(type,url){
      switch (type) {
        case 'Route':{
          return (dispatch(push(url)));
        }
        case 'a':{
          window.location.href=url;
          break;
        }
        default:{
          return dispatch(push('/error'));
        }
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
