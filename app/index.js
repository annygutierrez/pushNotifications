import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ListView,
  AsyncStorage
} from 'react-native';
import Navbar from './Navbar';
import Input from './Input';
import Items from './Items';

import PushNotification from 'react-native-push-notification';
import moment from 'moment';

PushNotification.configure({
  onRegister: function(token) {
    console.log('Token:', token)
  },
  onNotification: function(notification) {
    console.log('Notification:', notification)
  },
  permissions: { alert: true, badge: true, sound: true },
  popInitialNotification: true,
  requestPermissions: true
})
export default class Index extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1,r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows([]),
      items: [],
      title: '',
      date: '',
      isVisible: false
    }
    this.handleModalHide = this.handleModalHide.bind(this);
    this.handleModalShow = this.handleModalShow.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleAddItems = this.handleAddItems.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
  }

  componentWillMount() {
    AsyncStorage.getItem('items').then((json) => {
      try {
        const items = JSON.parse(json);
        this.handleState(items, items);
      } catch (err) {
        console.log(err);
      }
    })
  }

  handleNotifications(value, key) {
  }

  handleModalShow() {
    console.log('show modal se ejecuto');
    this.setState({ isVisible: true })
  }

  handleModalHide() {
    this.setState({ isVisible: false })
  }

  handleState(items, dataSource, obj = {}) {
    this.setState({
      items,
      dataSource: this.state.dataSource.cloneWithRows(dataSource),
      ...obj
     });
     AsyncStorage.setItem('items', JSON.stringify(items))
  }

  handleAddItems() {
    if(!this.state.title && !this.state.date) return;
    const newItems = [
      ... this.state.items,
      {
        key: Date.now(),
        title: this.state.title,
        date: this.state.date,
        notification: false
      }
    ];
    this.handleModalHide();
    this.handleState(newItems, newItems, { title: '', date: '' });
  }

  handleRemoveItem(key) {
    const newItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.handleState(newItems, newItems);
  }

  onChangeTitle(title) {
    this.setState({ title });
  }

  onChangeDate(date) {
    this.setState({ date });
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar
          openModal={this.handleModalShow}
        />
        <Input
          onChangeTitle={this.onChangeTitle}
          onChangeDate={this.onChangeDate}
          onHandleItems={this.handleAddItems}
          date={this.state.date}
          title={this.state.title}
          isVisible={this.state.isVisible}
          onCloseModal={this.handleModalHide}
        />
        <Items
          dataSource={this.state.dataSource}
          removeItems={this.handleRemoveItem}
        />
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