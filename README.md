ReactNative Experiment
=================================================================


 - React Native Video
 - JS call to/from WebView-Website     

Purpose of this project

 - JS calls from Webview to Webite and back (Done on Android)
 - Video running inside ReactNative (Done on Android)



Two libraries are used.          

 - [React Native WebView Javascript Bridge][1]
 - [react-native-video][2]

## Note
 - Some tweeking needed all around the project 
 - For JS call fix on Android, refer [here][3] and [here][5] ( [A nice read][6] )
 - [These are the changes][4] made to this project for JS call to-and-from Web-and-Native 

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
[5]: https://github.com/alinz/react-native-webview-bridge/issues/117
[6]: http://blog.bigbinary.com/2016/05/25/send-receive-data-between-react-native-and-webview.html
