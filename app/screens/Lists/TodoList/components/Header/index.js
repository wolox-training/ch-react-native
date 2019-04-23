import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo List</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#49b6ff',
    height: 60,
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 20
  }
});

export default Header;