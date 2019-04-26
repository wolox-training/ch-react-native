import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function DummyScreenContainer() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Hey</Text>
    </View>
  )
};

export default DummyScreenContainer;
