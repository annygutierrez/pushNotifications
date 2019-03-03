import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ListView,
  TouchableOpacity
} from 'react-native';

export default class Items extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          style={styles.list}
          enableEmptySections
          dataSource={this.props.dataSource}
          renderRow={({ key, ...value }) => {
            return (
              <View>
                <Text>{value.title}</Text>
                <Text>{value.date}</Text>
                <TouchableOpacity onPress={() => this.props.removeItems(key)}>
                  <Text>Delete</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});