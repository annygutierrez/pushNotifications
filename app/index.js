import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Navbar from './Navbar';
import Input from './Input';
import Items from './Items';

export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar
          
        />
        <Input />
        <Items />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F1ED'
  }
});