import React from 'react';
import { TextInput } from 'react-native';

import { INPUT_PLACEHOLDER } from './constants';
import styles from './styles';

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

export default TodoInput;
