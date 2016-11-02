/**
 *
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  WebView,
  View,
  Dimensions,
} from 'react-native';


class Home extends Component {
	render(){
		var wH = Dimensions.get('window').height
		var wW = Dimensions.get('window').width
		return(
			<View style={styles.container}>
				<WebView source={{uri:'http://www.yahoo.com'}}  style={{marginTop:1,height:wH,width:wW}} />
			</View>
		)
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
module.exports = Home;