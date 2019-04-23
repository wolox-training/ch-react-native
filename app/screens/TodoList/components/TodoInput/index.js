import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { INPUT_PLACEHOLDER } from './constants';

function TodoInput({ onAddItem }) {
  handleAddItem = e => onAddItem(e);

  return (
    <TextInput 
      style={styles.input} 
      placeholder={INPUT_PLACEHOLDER} 
      placeholderTextColor={'#bbbbbb'}
      onEndEditing={handleAddItem}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    height: 60,
    fontSize: 24,
    borderColor: '#bbbbbb',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    justifyContent: 'center'
  }
});

export default TodoInput;
