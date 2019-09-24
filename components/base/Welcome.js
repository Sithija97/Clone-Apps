import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  componentDidMount() {
    var that = this;
    setTimeout(function() {
      that.Hide_Splash_Screen();
    }, 5000);
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image
            source={require('./Home.jpg')}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
        </View>
      </View>
    );
    return (
        <View style={styles.MainContainer}>
        <Text style={{fontWeight: 'bold', paddingBottom:60}}>Welcome to SN Store</Text>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('Loading')}>
          <Text style={styles.ButtonText}>New to SN's Store</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('Loading')}>
          <Text style={styles.ButtonText}>Already using SN's Store</Text>
        </TouchableOpacity>

        {this.state.isVisible === true ? Splash_Screen : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#f5f6fa',
  },

  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },

  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#dfe4ea',
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    width: 350,
  },
  ButtonText: {
    fontWeight: 'bold',
    //color:'#4834d4'
  },
});
