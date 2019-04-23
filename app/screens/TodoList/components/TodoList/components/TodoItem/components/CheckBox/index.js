import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 2,
    height: 24,
    justifyContent: 'center',
    marginRight: 10,
    width: 24
  },
  center: {
    height: 12,
    width: 12,
    backgroundColor: '#FFF'
  },
  centerActive: {
    backgroundColor: '#000'
  }
});

export default CheckBox;
