import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'; 

class BooksListContainer extends Component {  
  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  }
});

export default BooksListContainer;
