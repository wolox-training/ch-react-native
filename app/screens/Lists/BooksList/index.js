import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import BookItem from './components/BookItem';
import { bookData } from './constants';

class BooksListContainer extends Component {
  renderList = item => (
    <BookItem
      navigation={this.props.navigation}
      image={item.image_url || undefined}
      title={item.title}
      author={item.author}
      id={item.id}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={bookData}
          renderItem={({ item }) => this.renderList(item)}
        />
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
