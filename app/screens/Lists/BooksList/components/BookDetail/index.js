import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import { findBookByIndex } from './utils';

class BookDetailContainer extends Component {
  state = { 
    currentBook: findBookByIndex(this.props.navigation.getParam('id', 1)) 
  };

  render() {
    const { currentBook } = this.state;

    console.log('jkeke', this.props.navigation.getParam('id', 1));

    return (
      <View style={styles.container}>
        {currentBook.image_url ? (
          <Image
            style={styles.image}
            source={{ uri: currentBook.image_url }}
          />
        ) : (
          <View style={styles.placeholderImage} />
        )}
        <Text style={styles.text}>Title: {currentBook.title}</Text>
        <Text style={styles.text}>Author: {currentBook.author}</Text>
        <Text style={styles.text}>Genre: {currentBook.genre}</Text>
        <Text style={styles.text}>Publisher: {currentBook.publisher}</Text>
        <Text style={styles.text}>Year: {currentBook.year}</Text>
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