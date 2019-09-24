import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class LocationScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold'}}>Locations</Text>
      </View>
    );
  }
}
