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

export default class Index extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1,r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows([]),
      items: [],
      title: '',
      date: ''
    }
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
          
        />
        <Input
          onChangeTitle={this.onChangeTitle}
          onChangeDate={this.onChangeDate}
          onHandleItems={this.handleAddItems}
          date={this.state.date}
          title={this.state.title}
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