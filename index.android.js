'use strict';


// var React = require('react-native');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';

var styles = StyleSheet.create({
    text:{
        fontSize:18 
    },
    container:{
        flex:1,
        margin: 30,
    },
    heading:{
        fontSize:20 ,
        marginBottom: 30,
        color:'black',
        marginTop: 70
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



class LoginPage extends React.Component{
    render(){
        var layout =
            <ScrollView style = { styles.container } >
    
                <Text style={styles.heading}>
                    Please Enter your Login Credentials
                </Text>
                
                <Text style={styles.text}>
                    Username
                </Text>
                <React.TextInput style={styles.bottom_margin}/>
    
                <Text style={styles.text}>
                    Password
                </Text>
                
                <React.TextInput />
                
                <TouchableHighlight style={styles.button}
                    underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>
             </ScrollView>
        ;
    return layout;
    }
};

AppRegistry.registerComponent('TestProject' , function(){return LoginPage});