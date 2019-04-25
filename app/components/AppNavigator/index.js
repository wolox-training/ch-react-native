import { createStackNavigator, createAppContainer } from 'react-navigation';

import ListsScreen from '../../screens/Lists';
import BookDetailContainer from '../../screens/Lists/BooksList/components/BookDetail';

const AppNavigator = createStackNavigator(
  {
    Lists: {
      screen: ListsScreen,
      navigationOptions: props => {
        console.warn(props.navigation);
      }
    }
  }
);

export default createAppContainer(AppNavigator);
