import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'; 

import BooksList from './components/BooksList';
import { bookData } from './constants';

class BooksListContainer extends Component {  
  render() {
    return (
      <View style={styles.container}>
        <BooksList bookData={bookData}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});

export default BooksListContainer;
