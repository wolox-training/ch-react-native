import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import TodoListScreenContainer from './TodoList';
import BookDetailContainer from './BooksList/components/BookDetail';

const ListsScreen = createBottomTabNavigator(
  {
    TodoList: {
      screen: createStackNavigator({
        TodoList: {
          screen: TodoListScreenContainer,
          navigationOptions: {
            headerTitle: 'TodoList'
          }
        }
      }),
      navigationOptions: {
        title: 'TodoList'
      }
    },
    BooksList: {
      screen: createStackNavigator({
        BooksList: {
          screen: BookDetailContainer,
          navigationOptions: {
            headerTitle: 'BooksList'
          }
        }
      }),
      navigationOptions: {
        title: 'BooksList'
      }
    }
  },
  {
    initialRouteName: "TodoList"
  }
);

export default createAppContainer(ListsScreen);
