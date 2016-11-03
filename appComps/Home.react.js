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
  Alert,
} from 'react-native';

import WebViewBridge from 'react-native-webview-bridge'


class Home extends Component {
	componentDidMount(){
		//Alert.alert('Home','Mount');

	}
	onBridgeMessage(message){
		// called once we got message from Webview
		//Alert.alert('WebView','Message'); 

		//send something to webview
		this.refs.webviewbridge.sendToBridge("pivotal react");
	}
	render(){
		var wH = Dimensions.get('window').height
		var wW = Dimensions.get('window').width
		return(
			<View style={styles.container}>
				<WebViewBridge 
					ref="webviewbridge"
					onBridgeMessage={this.onBridgeMessage.bind(this)}
					source={{uri:'http://pivotaldesign.biz/demo/sharangdhar/shop'}}
					style={{marginTop:1,height:wH,width:wW}} />
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