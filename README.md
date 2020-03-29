# Description

Development of AI audio app to compare the cough of a Coronavirus (COVID-19) infected individual with the cough of an uninfected individual.

# End-goal

The purpose of this application is to provide the global community with an application through which the user can upload a clip of themselves or a loved-one coughing to a machine-learning platform which analyzes the cough and determines the likelihood that the user is infected with COVID-19 as well as the other potentially crucial meta information such as the potential severity of the infection, likelihood of accompanying health concerns, etc.

# Phases of implementation

## Development of MVP

The first step of this project will be to develop the Minimum Viable Product for this application and get it to market so that end-users can begin to upload data to

## Data Gathering & ML Processing

The second step is to onboard as many users as feasible (both uninfected and infected individuals) and setup machine learning capabilities within the application, which processes audio clips uploaded to discern discrepancies between the coughs of an infected individuals and the coughs of an uninfected individual.

## COVID-19 Detection Application

Pivot the application to return predictions based on audio files uploaded once confidence level in ML Processing is high enough.

# Development

Create an account on https://expo.io/
On your mobile device install the Expo app

## macOS

### Getting Started

#### Homebrew:

Optional dependencies:

```bash
brew install android-sdk
brew install watchman
brew install react-native-cli
```

Installing yarn will install node by default:

```bash
brew install yarn
yarn global add expo-cli
```

Open another console:

```bash
git clone https://github.com/OpenCOVID19CoughCheck/CoughCheckApp.git
cd CoughCheckApp
```

Then we need to add the credentials to be able to connect to Open Humans OAuth by adding the right properties into a file `envLocal.json` in the root of the project

```bash
touch envLocal.json
```

Then open it and add the following properties with the real values:

```json
{
  "expo": {
    "extra": {
      "OH_OAUTH_URL": "TO-FILL",
      "OH_OAUTH_URL_TOKEN": "TO-FILL",
      "REMOTE_ACCESS_CONSUMER_KEY": "TO-FILL,
      "CLIENT_ID": "TO-FILL",
      "CLIENT_SECRET": "TO-FILL"
    }
  }
}
```

Then we will be able to start the project:

```bash
yarn
yarn start
```

Open Expo on your Android Device or Camera on iOS
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
[00:29:51] Running "main" with
# ...
```

## Libraries

We will try to use Expo to its fullest for rapid cross-platform development.
Expo covers a massive territory so when implementing a feature, please check Expo's documentation first.

- expo-av (Audio recording/playback)
- expo-app-auth (OAuth)
- expo-localization & i18n-js (Text localization)
- react-navigation
- react-native-paper (Google's Material UI look and feel)
- formik & yup (User input / form state management)

# Integrations

## Open Humans

Open Humans is the platform that <appname> will integrate with to house data clips uploaded by user for the
https://www.openhumans.org/

## OAuth2

OAuth2 is the platform used to authenticate users against.

## TODOs

- [x] Adding `prettier` & `editorconfig` so we all have a consistent code (also husky so we are sure not breaking existing style rules with new commits)
- [x] Adding `native-base` to implement the login.
- [x] Adding a [SafeArea layout](https://reactnavigation.org/docs/handling-safe-area/)/Keyboard layouts, so we are safe for devices with notches and able to reuse in different views.
- [x] Add Authentication routes and Global Context.
- [x] Adding `oAuth2`.
- [ ] Migrate existing UI components from `react-native-paper` to `native-base` components. [Here their reasons](https://github.com/GeekyAnts/NativeBase#2-why-nativebase) to make this choice and for me mainly because **they are wider used** and they provide both [Sketch/Illustrator/Figma compatible design components](https://nativebase.io/sketch-template) and recently launched [BuilderX](https://builderx.io/), is a browser based design tool that codes React Native. **Basically will allow to align UI/UX effort with what we produce in the app in a faster way**.
- [ ] I would change the styling approach from Object-based style to `styled-components`.
- [ ] Start adding tests with [`react-native-testing-library`](https://callstack.github.io/react-native-testing-library/docs/getting-started).
