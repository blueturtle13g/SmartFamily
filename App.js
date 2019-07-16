import React from 'react';
import {
} from 'react-native';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import reducers from './src/store/redux/reducers';
import { sagaWatcher } from './src/store/saga';
import AppContainer from './src/navigation';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(sagaWatcher);

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render(){
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
};
