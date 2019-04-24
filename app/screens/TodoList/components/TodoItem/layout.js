import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import CheckBox from './components/CheckBox';
import styles from './styles';

function TodoItem({ onCheck, onDelete, isChecked, item }) {
  return (
    <TouchableOpacity
      onPress={onCheck}
      style={[
        styles.itemContainer,
        isChecked && styles.itemContainerSelected
      ]}
    >
      <Text style={styles.itemTitle}>{item.text}</Text>
      <CheckBox isChecked={isChecked} />
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.itemDelete}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
};

export default TodoItem;
