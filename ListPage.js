'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;


var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  }
});

class ListPage extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <View >
        <Text>
          Search for houses to buy sonali kakrayne!
        </Text>
        <Text>
          Search by place-name, postcode or search near your location.
        </Text>
      </View>
    );
  }
}

module.exports = ListPage;