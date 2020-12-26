import React from 'react';
import {StatusBar, View} from 'react-native';
import 'react-native-gesture-handler';
import AppRouter from './router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store';
import redux from './utils/redux';

const store = createStore(reducer);

const MainPage = redux(({state, dispatch}) => {
  const {showStatusBar, statusBarColor, statusBarDark} = state;
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={statusBarDark ? 'dark-content' : 'light-content'}
      />
      {showStatusBar ? (
        <View
          style={{
            height: StatusBar.currentHeight,
            backgroundColor: statusBarColor,
          }}
        />
      ) : null}
      <AppRouter />
    </>
  );
});

export default () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};
