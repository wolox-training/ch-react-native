import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import detail from './constants';

class BookDetailContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        {detail.image_url ? (
          <Image
            style={styles.image}
            source={{ uri: detail.image_url }}
          />
        ) : (
          <View style={styles.placeholderImage} />
        )}
        <Text style={styles.text}>Title: {detail.title}</Text>
        <Text style={styles.text}>Author: {detail.author}</Text>
        <Text style={styles.text}>Genre: {detail.genre}</Text>
        <Text style={styles.text}>Publisher: {detail.publisher}</Text>
        <Text style={styles.text}>Year: {detail.year}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    flex: 1
  },
  image: {
    alignSelf: 'stretch',
    height: 200
  },
  text: {
    fontSize: 18,
    marginTop: 10,
  }
});

export default BookDetailContainer;