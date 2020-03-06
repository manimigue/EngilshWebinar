import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { HashLink } from 'react-router-hash-link';

class Link extends Component {
  render() {
    return (
      <button className="apply-button"><HashLink smooth to="/#tickets">{this.props.children}</HashLink></button>
    );
  }
}

const mapStateToProps = () => ({});

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

export default connect(mapStateToProps, mapDispatchToProps)(Link);
