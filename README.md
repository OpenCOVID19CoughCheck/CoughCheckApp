# Goal

The purpose of this application is to provide the global community with an application through which the user can upload a clip of themselves or a loved-one coughing to a machine-learning platform which analyzes the cough and determines the likelihood that the user is infected with COVID-19 as well as the other potentially crucial meta information such as the potential severity of the infection, likelihood of accompanying health concerns, etc.

# Project Links

  - Join our [Slack channel](https://join.slack.com/t/open-covid19/shared_invite/zt-cbji2hte-8jdoHpJDKg80ZliPVCIjqw)
  - Participate using our [Trello board](https://trello.com/opencovid19aicoughdetectionteam)
  - Our project is kindly hosted and supported by [JOGL (Just One Giant Lab)](https://app.jogl.io/project/132)
  
# Usage

WiP
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

### Execute the project

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

# Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].

<a href="https://github.com/OpenCOVID19CoughCheck/coughcheckapp/graphs/contributors"><img src="https://opencollective.com/coughcheckapp/contributors.svg?width=890&button=false" /></a>

## Phases of implementation

### Development of MVP

The first step of this project will be to develop the Minimum Viable Product for this application and get it to market so that end-users can begin to upload data to.

  - [Figma Prototype](https://www.figma.com/file/OTTJjNQSbzJ7d9qCyLOZ9h/OpenCOVID19?node-id=0%3A1)
  - Add your own prototype...

### Data Gathering & ML Processing


The second step is to onboard as many users as feasible (both uninfected and infected individuals) and setup machine learning capabilities within the application, which processes audio clips uploaded to discern discrepancies between the coughs of an infected individuals and the coughs of an uninfected individual.

### COVID-19 Detection Application

Pivot the application to return predictions based on audio files uploaded once confidence level in ML Processing is high enough.

## 🤝 Contributing

Feel free to check [issues page](https://github.com/OpenCOVID19CoughCheck/CoughCheckApp/issues) if you want to contribute.

[Check the contributing guide](./CONTRIBUTING.md)

# Status

CoughCheckApp is being actively developed. Visit the to the ToDo list to contribute or see the features in progress.

## Show your support

Become a financial contributor and help us sustain our community through [OpenCollective](https://opencollective.com/coughcheckapp/contribute) or <a href="https://liberapay.com/OpenCOVID19CoughCheck/donate">
  <img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg">
</a>

Please ⭐️ this repository if this project can help you!

## 📝 License


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

=======
Copyright © 2020 [OpenCOVID19CoughCheck Team](https://github.com/OpenCOVID19CoughCheck)
This project is [MIT](https://github.com/OpenCOVID19CoughCheck/CoughCheckApp/blob/master/LICENSE) licensed.

