import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import Index from './app/index';

export default class App extends Component {
  renderScene(route, navigator) {
    return (
      <Index />
    )
  }
  render() {
    return (
      <Navigator
        renderScene={this.renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
});
