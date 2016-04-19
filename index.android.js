'use strict';


// var React = require('react-native');
var ListPage = require('./ListPage');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Navigator,
  BackAndroid,
} from 'react-native';

var styles = StyleSheet.create({
    text:{
        fontSize:18 
    },
    container:{
        flex:1,
        
    },
    box:{
        padding: 20,
         
    },
    heading:{
        fontSize:20 ,
        marginBottom: 30,
        color:'black',
        marginTop: 40
    },
    bottom_margin:{
        marginBottom: 20
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        marginTop: 40,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

class TestPage extends Component{
    
    render(){
    var layout = <View style={styles.container}>
        <Text>
          Search for houses to buy!
        </Text>
        <Text>
          Search by place-name, postcode or search near your location.
        </Text>
      </View>;
      
      return layout;
    }
      
}

class LoginPage extends React.Component{
    _onLogin(){
     _navigator.push({
            name: 'ListViewPage',
            renderScene: RouteMapper
          });
    }
    render(){
        var layout =
            <ScrollView style = { styles.box }>
    
                <Text style={styles.heading}>
                    Please Enter your Login Credentials
                </Text>
                
                <Text style={styles.text}>
                    Username
                </Text>
                <React.TextInput style={styles.bottom_margin}
                placeholder="Username"
                placeholderTextColor="rgba(255, 255, 255, 0.5)"/>
    
                <Text style={styles.text}>
                    Password
                </Text>
                
                <React.TextInput placeholder="Password"
                placeholderTextColor="rgba(255, 255, 255, 0.5)"/>
                
                <TouchableHighlight style={styles.button}
                    onPress={this._onLogin.bind(this)}
                    underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>
             </ScrollView>
        ;
    return layout;
    }
};

var RouteMapper = function(route, navigationOperations, onComponentRef) {
  _navigator = navigationOperations;
  
  if (route.name === 'LoginPage') {
    return (
      <LoginPage navigator={navigationOperations} />
    );
  } else if (route.name === 'ListViewPage') {
    return (
      <ListPage navigator={navigationOperations}/>
    );
  }
};


class ReactNativeProject extends React.Component{
     render(){
         var navigator = <Navigator
                            style={styles.container}
                            initialRoute={{name: 'LoginPage', index: 0}}
                            renderScene={RouteMapper}
                        />;
                        return navigator;
        }
};


AppRegistry.registerComponent('HelloReactNative' , function(){return ReactNativeProject});