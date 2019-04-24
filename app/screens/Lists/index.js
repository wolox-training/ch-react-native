import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import TodoListScreenContainer from './TodoList'
import BooksListContainer from './BooksList'

const ListsScreen = createBottomTabNavigator(
  {
    TodoList: TodoListScreenContainer,
    BooksList: BooksListContainer
  },
  {
    initialRouteName: "TodoList"
  }
);

export default createAppContainer(ListsScreen);
