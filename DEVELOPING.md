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