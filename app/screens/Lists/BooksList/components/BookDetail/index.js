import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

function BookDetail({ image, title, author }) {
  return (
    <View style={styles.container}>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
    flex: 1
  }
});

export default BookDetail;
