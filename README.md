ReactNative with Video and JS call to Website
=============================================

The purpose of this projet is to test     

 - Video running inside ReactNative
 - JS calls from Webview to Webite and back


Two libraries are used.          

 - [React Native WebView Javascript Bridge][1]
 - [react-native-video][2]

## Note
 - Some tweeking needed all around the project 
 - [For JS call fix on Android, refer this][3]
 - [These are the changes][4] made to this project for JS call

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
[4]: https://github.com/saumya/RNwebJSnLocalVideo/commit/fd9748e46f161714030b701f90394ac9887570a5