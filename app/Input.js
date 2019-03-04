import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Input extends Component {
  render() {
    return (
      <View>
        <Modal
          style={styles.modalTop}
          isVisible={this.props.isVisible}
          animationIn={'slideInLeft'}
          animationOut={'slideOutRight'}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => this.props.onCloseModal()}>
              <Icon
                name="times-circle"
                size={20}
                color={"#000"}
              />
            </TouchableOpacity>
            <TextInput
              value={this.props.title}
              placeholder='Title'
              style={styles.input}
              onChangeText={(title) => this.props.onChangeTitle(title)}
            />
            <DatePicker
              date={this.props.date}
              mode={"datetime"}
              placeholder="Date"
              format="YYYY-MM-DD HH:mm"
              minDate="2017-01-01"
              maxDate="2050-01-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={(date) => this.props.onChangeDate(date)}
            />
            <TouchableOpacity
              onPress={this.props.onHandleItems}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center'
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 5
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
  },
  modalTop: {
    justifyContent: 'flex-start',
    paddingTop: 50
  }
});