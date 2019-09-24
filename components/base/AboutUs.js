import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class AbtUsScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold'}}>about us</Text>
        <Text style={{fontWeight: 'bold'}}>contact us</Text>
        <Text style={{fontWeight: 'bold'}}>- snpapers@gmail.com</Text>
        <Text style={{fontWeight: 'bold'}}>077xxxxxxx</Text>
      </View>
    );
  }
}
