import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.containerButton}
        >
          <Text>New</Text>
        </TouchableOpacity>
        <Text style={styles.textCenter}>Remember me</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: '#81C04D',
    flexDirection: 'row'
  },
  containerButton: {
    position: 'absolute',
    top: 30,
    left: 8
  },
  textCenter: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});