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
import Video from 'react-native-video'


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
					style={{margin:4,height:wH/2,width:wW,}} />
        
        <Video
          repeat
          resizeMode='cover'
          source={require('./video/fire.mp4')}
          style={ {position: 'absolute',top:wH/2,left:0,bottom:0,right:0,margin:4} } />
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
module.exports = Home;