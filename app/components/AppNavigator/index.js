import { createStackNavigator, createAppContainer } from 'react-navigation';

import TodoListContainer from '../../screens/TodoList'

const AppNavigator = createStackNavigator(
  {
    TodoList: TodoListContainer
  },
  {
    initialRouteName: "TodoList"
  }
);

export default createAppContainer(AppNavigator);
