import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackActions } from 'react-navigation';

import styles from './styles';
import placeholder from './assets/book.png';

class BookItem extends Component {
  handlePressBookItem = () => this.props.onPressBookItem(this.props.id, this.props.title); 

  render() {
    const { image, title, author } = this.props;
    return (
      <TouchableOpacity
        onPress={this.handlePressBookItem}
        style={styles.itemContainer}
      >
        <Image
          style={styles.image}
          source={image ? { uri: image } : placeholder}
        />
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.itemAuthor}>{author}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

export default BookItem;
