import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const Routes = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'heart-outline'},
    { key: 'music', title: 'Request', focusedIcon: 'settings' },
    { key: 'recents', title: 'Wallets', focusedIcon: '' },
    { key: 'notifications', title: 'Profile', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
   
    home: Home,
    music: Welcome,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Routes;