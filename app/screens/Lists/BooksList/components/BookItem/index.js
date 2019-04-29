import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackActions } from 'react-navigation';

import styles from './styles';
import placeholder from './assets/book.png';

class BookItem extends Component {
  handlePressItem = () => {    
    const { id, title, navigation } = this.props;

    const action = StackActions.push({
      routeName: 'BookDetail',
      params: { 
        id: id,
        title:  title
      }
    });
    navigation.dispatch(action);
  }

  render() {
    const { image, title, author } = this.props;

    return (
      <TouchableOpacity
      onPress={this.handlePressItem}
      style={styles.itemContainer}
    >
      <Image
        style={styles.image}
        source={image ? { uri: image} : placeholder}
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
