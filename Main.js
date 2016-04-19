//var React = require('react-native');
var BookList = require('./BookList');
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  TextInput
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
        color:'#48BBEC',
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
    },
    textField1: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginBottom:20,
        marginTop:20       
  }
});


class Main extends React.Component {
	onButtonPressed(){
        console.log("Username", this.state.username);
        
        if(this.state.username === "pwc" && this.state.password === "welcome"){
              this.props.navigator.push({
                  title: 'Moview List',
                 component: BookList
             });  
        }
        else{
          alert("Please check your login credentials!")  
        }
	}

   constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }
 
	render(){

		return(
		
            <ScrollView style = { styles.container } >
    
                 <Text style={styles.heading}>
                    Please Enter your Login Credentials
                </Text>
                
                <Text style={styles.text}>
                    Username
                </Text>
                <React.TextInput style={styles.textField1}
                value={this.state.username}
                onChangeText={username => this.setState({username})}
          />
    
                <Text style={styles.text}>
                    Password
                </Text>
                
                <React.TextInput style={styles.textField1}
                        ref="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        onSubmitEditing={this.onButtonPressed}
                        password = {true}
          />
                
                <TouchableHighlight style={styles.button}
                    underlayColor='#99d9f4' onPress={this.onButtonPressed.bind(this)}>
                <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>
             </ScrollView>

		)
	}
};

module.exports = Main;