import React from 'react';
import { render } from 'react-dom';
import createStore from './store/creatStore';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import App from './App'

ReactGA.initialize('UA-142874242-1');
const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

history.listen(({ pathname }) => {
  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
});

const store = createStore(history);

render (
  <App history={history} store={store}/>,
  document.getElementById('root')
);