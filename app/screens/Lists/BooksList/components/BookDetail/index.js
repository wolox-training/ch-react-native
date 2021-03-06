import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import { findBookByIndex } from './utils';
import styles from './styles';
import placeholder from './assets/book.png';

class BookDetailContainer extends Component {
  state = {
    currentBook: findBookByIndex(this.props.navigation.getParam('id', 1))
  };

  render() {
    const { currentBook } = this.state;

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={currentBook && currentBook.image_url ? { uri: currentBook.image_url } : placeholder}
        />
        <Text style={styles.text}>{`Title: ${currentBook.title}`}</Text>
        <Text style={styles.text}>{`Author: ${currentBook.author}`}</Text>
        <Text style={styles.text}>{`Genre: ${currentBook.genre}`}</Text>
        <Text style={styles.text}>{`Publisher: ${currentBook.publisher}`}</Text>
        <Text style={styles.text}>{`Year: ${currentBook.year}`}</Text>
      </View>
    );
  }
}

export default BookDetailContainer;