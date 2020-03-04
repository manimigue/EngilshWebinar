import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Logo from '../img/logo.jpg'
import facebook from '../img/facebook.png'

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lists = this.props.links.map(link => {
      return (
        <div key={link.text} onClick={() => this.props.linkToPage(link.type,link.url)}>{link.text}</div>
      );
    });
    return (
      <footer>
        <div className='footer-links'>
          <ul>{lists}</ul>

            <img src={Logo} alt='FooterLogo' size='60%' onClick={() => this.props.linkToPage('Route','/')}/>
            <a href='https://www.facebook.com/LilysTranSupport'>
              <img className='facebook' src={facebook} alt='facebook' width='5%'/>
            </a>
        </div>
        <div className="copyright">
          <p>Ⓒ 2020 Lily's TranSupport All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = ({links}) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
