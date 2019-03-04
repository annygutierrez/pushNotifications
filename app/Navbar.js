import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Navbar extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.textCenter}>Remember me</Text>
        <TouchableOpacity
          onPress={this.props.openModal}
          style={styles.containerButton}
        >
          <Text>New</Text>
        </TouchableOpacity>
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