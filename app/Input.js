import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class Input extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Title'
          style={styles.input}
          onChangeText={(title) => this.props.onChangeTitle(title)}
        />
        <DatePicker
          mode={"datetime"}
          placeholder="Date"
          format="YYYY-MM-DD HH:mm"
          minDate="2017-01-01"
          maxDate="2050-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date) => this.props.onChangeDate(date)}
        />
        <TouchableHighlight
        onPress={this.props.onHandleItems}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Send</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80
  },
  buttonText: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'skyblue',
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 5
  },
  input: {
    marginBottom: 5,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3
  }
});