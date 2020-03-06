import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Link extends Component {
  static propTypes = {
    type : PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button className='link-button' onClick={()=>this.props.linkToPage(this.props.type,this.props.url)}>{this.props.children}</button>
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
