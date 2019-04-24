import React from 'react';
import { View, Text } from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo List</Text>
    </View>
  )
};

export default Header;
