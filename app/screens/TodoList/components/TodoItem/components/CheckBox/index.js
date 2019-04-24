import React from 'react';
import { View } from 'react-native';

import styles from './styles';

function CheckBox({ isChecked }) {
  return (
    <View style={styles.container}>
      <View style={[styles.center, isChecked && styles.centerActive]} />
    </View>
  )
}

CheckBox.defaultProps = {
  isChecked: false
};

export default CheckBox;
