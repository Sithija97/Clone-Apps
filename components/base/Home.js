import React from 'react';
import firebase from 'react-native-firebase';
import {StyleSheet, Platform, Image, Text, View} from 'react-native';

export default class HomeScreen extends Component {
  state = {currentUser: null};
  componentDidMount() {
    const {currentUser} = firebase.auth();
    this.setState({currentUser});
  }
  state = {currentUser: null};
  render() {
    const {currentUser} = this.state;
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>
          SN Papers {currentUser && currentUser.email}!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
