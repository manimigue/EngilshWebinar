import React from 'react'
import { withAuth } from '@okta/okta-react';
import Button from 'react-bootstrap/Button'

class MemberHeader extends React.Component {

  logout = async() => {
    this.props.auth.logout('/login');
  }

  render () {
    const userName= this.props.userName;
    return(
      <div className="memberHeader" >
        <h2 className='title'>Member</h2>
        <ul className='userContent'>
          <span className='userName'>{ userName }</span>
          <br className='br' />
          <Button variant="dark" onClick={this.logout}>Log out</Button>
        </ul>
      </div>
    )
  }
}

export default withAuth(MemberHeader);
