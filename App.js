import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';

import AppNavigator from './app/components/AppNavigator';
import TodoListContainer from './app/screens/TodoList';

function App() {
  return <AppNavigator/>;
};

export default App;
