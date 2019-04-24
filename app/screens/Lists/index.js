import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import TodoListScreenContainer from './TodoList';
import BookDetailContainer from './BooksList/components/BookDetail';

const ListsScreen = createBottomTabNavigator(
  {
    TodoList: TodoListScreenContainer,
    BooksList: BookDetailContainer
  },
  {
    initialRouteName: "TodoList"
  }
);

export default createAppContainer(ListsScreen);
