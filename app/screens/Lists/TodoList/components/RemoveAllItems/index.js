import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

function RemoveAllItems({ onRemoveAllItems }) {
  return (
    <TouchableOpacity
      onPress={onRemoveAllItems}
      style={styles.header}
    >
      <Text style={styles.title}>Remove All Items</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderColor: '#bbbbbb',
    borderTopWidth: 1,
    height: 60,
    justifyContent: 'center'
  },
  title: {
    color: 'red',
    fontSize: 20
  }
});

export default RemoveAllItems;
