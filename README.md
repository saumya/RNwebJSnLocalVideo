ReactNative with Video and JS call to Website
=============================================

The purpose of this projet is to test     

 - Video running inside ReactNative
 - JS calls from Webview to Webite and back


Two libraries are used.          

 - [React Native WebView Javascript Bridge][1]
 - [react-native-video][2]

## Note
 - Some tweeking needed all around the project ( [Android][3] )

```
react-native init AwesomeProject
cd AwesomeProject
react-native run-ios
//
npm install react-native-webview-bridge --save
npm install react-native-video --save
```

### Utility commands

```
// Android
adb shell input keyevent 82

// ip on mac
ifconfig | grep inet
```






[1]: https://github.com/alinz/react-native-webview-bridge
[2]: https://github.com/react-native-community/react-native-video
[3]: https://github.com/alinz/react-native-webview-bridge/issues/130