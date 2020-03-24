# Development

Create an account on https://expo.io/
On your Android device install the Expo app

## macOS + iOS Build

## macOS + Android Build

```bash
brew install android-sdk
brew install watchman
brew install react-native-cli
npm install -g exp
npm install -g expo-cli
````

Open another console:

```bash
cd cough-app
yarn upgrade
exp start
export EXPO_DEBUG=true
exp ba
exp doctor
```

Open Expo on your Android Device
Scan QR code

Check the output log, after you record some seconds it should look like this:

```bash
[00:28:57] Your URL is: exp://192.168.1.120:19000

[00:28:57] Instructions to open this project on a physical device
[00:28:57] Android devices: scan the above QR code.
[00:28:57] iOS devices: run exp send -s <your-phone-number-or-email> in this project directory in another terminal window to send the URL to your device.

[00:28:57] Instructions to open this project on a simulator
[00:28:57] If you already have the simulator installed, run exp ios or exp android in this project directory in another terminal window.

[00:28:57] Logs for your project will appear below. Press Ctrl+C to exit.
[00:29:49] Finished building JavaScript bundle in 31751ms.
[00:29:51] Running "main" with {"initialProps":{"exp":{"initialUri":"exp://192.168.1.120:19000","manifest":{"env":{"EXPO_DEBUG":"true"},"id":"@hernanmd/covid19-cough-detector",,"privacy":"public","assetBundlePatterns":["**/*"],"primaryColor":"#023C69","bundleUrl":"http://192.168.1.120:19001/node_modules/expo/AppEntry.bundle?platform=android&dev=truem&minify=false&hot=false&assetPlugin=%2FUsers%2Fmvs%2Fgit_projects%2Fother%2FOpenCOVID19-AIDetectApp%2Fcough-app%2Fnode_modules%2Fexpo%2Ftools%2FhashAssetFiles","slug":"covid19o-cough-detector","name":"Cough Check","icon":"./assets/icon.png","xde":true,"loadedFromCache":false,"splash":{"resizeMode":"contain","backgroundColor":"#ffffff","image":"./ass/ets/splash.png","imageUrl":"http://192.168.1.120:19001/assets/./assets/splash.png"},"orientation":"portrait","iconUrl":"http://192.168.1.120:19001/assets/./assets/icon.png","iisVerified":true,"version":"1.0.0","developer":{"tool":"exp","projectRoot":"/Users/mvs/git_projects/other/OpenCOVID19-AIDetectApp/cough-app"},"mainModuleName":"node_modules/expEo/AppEntry","debuggerHost":"192.168.1.120:19001","android":{"package":"com.opencovid19.coughcheck"},"logUrl":"http://192.168.1.120:19000/logs","packagerOpts":{"dev":true,"lanTiype":"ip","hostType":"lan","minify":false,"urlRandomness":"37-dbg"},"sdkVersion":"36.0.0","platforms":["ios","android","web"],"hostUri":"192.168.1.120:19000","ios":{"supportsTtablet":true},"updates":{"fallbackToCacheTimeout":0}},"shell":false}},"rootTag":1}
[00:29:51] LOG  Running "main" with {"initialProps":{"exp":{"initialUri":"exp://192.168.1.120:19000","manifest":{"env":{"EXPO_DEBUG":"true"},"id":"@hernanmd/covid19-cough-detecctor","privacy":"public","assetBundlePatterns":["**/*"],"primaryColor":"#023C69","bundleUrl":"http://192.168.1.120:19001/node_modules/expo/AppEntry.bundle?platform=android&devt=true&minify=false&hot=false&assetPlugin=%2FUsers%2Fmvs%2Fgit_projects%2Fother%2FOpenCOVID19-AIDetectApp%2Fcough-app%2Fnode_modules%2Fexpo%2Ftools%2FhashAssetFiles","slug":"codvid19-cough-detector","name":"Cough Check","icon":"./assets/icon.png","xde":true,"loadedFromCache":false,"splash":{"resizeMode":"contain","backgroundColor":"#ffffff","image":"s./assets/splash.png","imageUrl":"http://192.168.1.120:19001/assets/./assets/splash.png"},"orientation":"portrait","iconUrl":"http://192.168.1.120:19001/assets/./assets/icon.pnig","isVerified":true,"version":"1.0.0","developer":{"tool":"exp","projectRoot":"/Users/mvs/git_projects/other/OpenCOVID19-AIDetectApp/cough-app"},"mainModuleName":"node_moduleos/expo/AppEntry","debuggerHost":"192.168.1.120:19001","android":{"package":"com.opencovid19.coughcheck"},"logUrl":"http://192.168.1.120:19000/logs","packagerOpts":{"dev":true,p"lanType":"ip","hostType":"lan","minify":false,"urlRandomness":"37-dbg"},"sdkVersion":"36.0.0","platforms":["ios","android","web"],"hostUri":"192.168.1.120:19000","ios":{"supplortsTablet":true},"updates":{"fallbackToCacheTimeout":0}},"shell":false}},"rootTag":1}
[00:30:02] LOG  file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540hernanmd%252Fcovid19-cough-detector/Audio/recording-dde380a0-5ca8-40cd-9661-6f515d9ee408.m4a
[00:30:02] file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540hernanmd%252Fcovid19-cough-detector/Audio/recording-dde380a0-5ca8-40cd-9661-6f515d9ee408.m4a
```