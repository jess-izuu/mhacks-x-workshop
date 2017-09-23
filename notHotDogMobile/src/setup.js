import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';

import reducers from './reducers';
import App from './components/App';

class Root extends Component {
  configureStore(onComplete: ?() => void) {
    return (applyMiddleware(ReduxThunk)(createStore))(reducers);
  };

  render() {
    return (
	    <Provider store={this.configureStore()}>
	      <App />
	    </Provider>
	  );
  }
}

export default Root;