import { createStackNavigator, createAppContainer } from 'react-navigation';

import ListsScreen from '../../screens/Lists'

const AppNavigator = createStackNavigator(
  {
    Lists: {
      screen: ListsScreen,
      navigationOptions: () => ({
        title: `Apiaccere`,
      }),
    }
  }
);

export default createAppContainer(AppNavigator);
