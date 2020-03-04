import { createStore as rCreateStore, combineReducers, applyMiddleware} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import linksReducer from '../reducers/linksReducer';


function createStore(history) {
  return rCreateStore(
    combineReducers({
      links:linksReducer,
      router:routerReducer
    }),
    applyMiddleware(
      //ReduxのAction使ってrouter制御できるようになる
      routerMiddleware(history)
    )
  );
}

export default createStore;
