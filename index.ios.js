import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs:
  [
    {
      label: 'Home',
      screen: 'example.LoginScreen', // this is a registered name for a screen
      icon: require('./img/one.png'),
    //   selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'doo.'
  },

    // {
    //   label: 'Two',
    //   screen: 'example.SecondTabScreen',
    //   icon: require('./img/two.png'),
    // //   selectedIcon: require('../img/two_selected.png'), // iOS only
    //   title: 'Search'
    // }
],
  tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
    tabBarButtonColor: '#ffff00', // optional, change the color of the tab icons and text (also unselected)
    tabBarSelectedButtonColor: '#ff9900', // optional, change the color of the selected tab icon and text (only selected)
    tabBarBackgroundColor: '#551A8B' // optional, change the background color of the tab bar
  },
});
