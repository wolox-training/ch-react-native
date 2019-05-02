import { createStackNavigator, createAppContainer } from 'react-navigation';

import ListsScreen from '../../screens/Lists';
import BookDetailContainer from '../../screens/Lists/BooksList/components/BookDetail';

const AppNavigator = createStackNavigator(
  {
    Lists: {
      screen: ListsScreen,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.routes[navigation.state.index].routeName
      })
    },
    BookDetail: {
      screen: BookDetailContainer,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.title
      })
    }
  }
);

export default createAppContainer(AppNavigator);
