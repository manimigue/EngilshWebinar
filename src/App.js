import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route} from 'react-router-dom';
import ReactGA from 'react-ga';
import { Security, SecureRoute, ImplicitCallback} from '@okta/okta-react';
import Header from './components/Header';
import Land from './components/Land';
import Contact from './components/Contact';
import Login from './components/Login';
import Member from './components/Member';
import Footer from './components/Footer';

import './index.css';
import Tickets from './components/Tickets';

function onAuthRequired({history}) {
  history.push('/login');
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
    }
  }

  componentDidMount() {
    const { pathname } = this.props.history.location;
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  }

  render() {
    return (
      <Provider store={this.props.store} >
        <ConnectedRouter history={this.props.history}>
          <Security
            issuer='https://dev-286685.okta.com/oauth2/default'
            clientId='0oa305aw9hqfQoLOe357'
            redirectUri={window.location.origin + '/EnglishWebinar/implicit/callback'}
            onAuthRequired={onAuthRequired}
            pkce={true}
             >
            <div className='body'>
              <Header /> 
              <div className='main'>
                <Route exact path='/' component={Land} />
                <Route exact path='/tickets' component={Tickets} />
                <Route exact path='/contact' component={Contact} />
                <Route path='/login' render={() => <Login baseUrl='https://dev-286685.okta.com' />} />
                <Route path='/implicit/callback' component={ImplicitCallback} />
                <SecureRoute exact path='/member' component={Member} />
              </div>
              <Footer /> 
            </div>
          </Security>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
