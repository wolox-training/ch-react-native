import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import BookItem from './components/BookItem';

function BooksList({ bookData }) {
  renderList = item => (
    <BookItem 
      image={item.image_url || undefined} 
      title={item.title} 
      author={item.author}
    />
  );

  return (
    <FlatList
      style={styles.bookContainer}
      data={bookData}
      renderItem={({ item }) => renderList(item)}
    />
  )
}

const styles = StyleSheet.create({
  bookContainer: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    flex: 1,
    marginTop: 30
  }
});

export default BooksList;
