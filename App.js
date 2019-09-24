import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';

//initialize firebase

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './components/base/Home';
import WelcomeScreen from './components/base/Welcome';
import AbtUsScreen from './components/base/AboutUs';
import LocationScreen from './components/base/Locations/Location';
import LoadingScreen from './components/base/Loading';
import SignUpScreen from './components/base/SignUp';
import LoginScreen from './components/base/Login';

export default class App extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return <AppContainer/>;
  }
}

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    AboutUs: AbtUsScreen,
    Locations: LocationScreen
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#ced6e0',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#4834d4',
    },
  },
);

const HomeNavigator = createStackNavigator(
  {
    Welcome:WelcomeScreen,
    Loading:LoadingScreen,
    SignUp:SignUpScreen,
    Login:LoginScreen,
    Home: DrawerNavigator,
 
  },
  
  {
    initialRouteName: 'Loading'
  },

  {
    defaultNavigationOptions: ({ navigation }) => {
      return{
        headerStyle: {
          backgroundColor:'#4834d4'
        },
        //headerTitle:'Home',
        headerTintColor:'#fff',
        headerTitleStyle: {
          fontWeight:'bold',
          textAlign:'center',
          flex:1
        },
        headerLeft: (
          <Icon
          style={{paddingLeft:10, color:'white'}}
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          size={30}
          />
        ),
        headerRight: (
          <View/>
        )
      }
    }
  }
);

const AppContainer = createAppContainer(HomeNavigator);