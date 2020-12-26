import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import redux from '../utils/redux';

const Screens = {
  HomeScreen,
  DetailScreen,
};

const reduxScreens = {};

Object.keys(Screens).forEach((name) => {
  reduxScreens[name] = redux(Screens[name]);
});

export default reduxScreens;
