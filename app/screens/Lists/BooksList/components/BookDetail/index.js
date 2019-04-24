import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import detail from './constants';

class BookDetailContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        {image ? (
          <Image
            style={styles.image}
            source={{ uri: image }}
          />
        ) : (
            <View style={styles.placeholderImage} />
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'red',
    justifyContent: 'center',
    flex: 1
  }
});

export default BookDetailContainer;