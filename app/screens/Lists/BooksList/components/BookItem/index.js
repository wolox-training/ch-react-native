import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import styles from './styles';

function BookItem({ image, title, author }) {
  return (
    <View style={styles.itemContainer}>
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
    </View>
  );
};

export default BookItem;
