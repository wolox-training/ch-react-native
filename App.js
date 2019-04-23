import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import TodoListContainer from './app/screens/TodoList';
import BooksListContainer from './app/screens/BooksList';

const App = createBottomTabNavigator({
  TodoList: TodoListContainer,
  BooksList: BooksListContainer
})

export default createAppContainer(App);
