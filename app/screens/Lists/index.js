import React from 'react';
import {Text} from 'react-native';

import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import TodoListScreenContainer from './TodoList';
import BooksListContainer from './BooksList';
import BookDetailContainer from './BooksList/components/BookDetail';

const ListsScreen = createBottomTabNavigator(
  {
    TodoList: {
      screen: TodoListScreenContainer,
      navigationOptions: {
        title: 'TodoList'
      }
    },
    BooksList: {
      screen: BooksListContainer,
      navigationOptions: {
        title: 'BooksList'
      }
    }
  },
  {
    initialRouteName: 'TodoList'
  }
);

export default createAppContainer(ListsScreen);
