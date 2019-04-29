import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

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

export default RemoveAllItems;
