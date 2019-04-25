import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackActions } from 'react-navigation';

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

    console.log('no', this.props);

    return (
      <TouchableOpacity
        onPress={this.handlePressItem}
        style={styles.itemContainer}
      >
        {image ? (
          <Image
            style={styles.image}
            source={{ uri: image }}
          />
        ) : (
            <View style={styles.placeholderImage} />
          )}
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.itemAuthor}>{author}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

BookItem.defaultProps = {
  image_url: ''
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderColor: '#bbbbbb',
    height: 80,
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  image: {
    height: 70,
    marginRight: 20,
    width: 70
  },
  placeholderImage: {
    backgroundColor: '#bbbbbb',
    borderRadius: 50,
    height: 70,
    marginRight: 20,
    width: 70
  },
  itemContainerSelected: {
    backgroundColor: '#bbbbbb'
  },
  textContainer: {
    justifyContent: 'center'
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '700'
  },
  itemAuthor: {
    fontSize: 14
  }
});

export default BookItem;
