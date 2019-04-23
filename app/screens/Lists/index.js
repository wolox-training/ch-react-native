import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import TodoListScreenContainer from './TodoList'
import DummyScreenContainer from './Dummy'

const ListsScreen = createBottomTabNavigator(
  {
    TodoList: TodoListScreenContainer,
    Dummy: DummyScreenContainer
  },
  {
    initialRouteName: "TodoList"
  }
);

export default createAppContainer(ListsScreen);
