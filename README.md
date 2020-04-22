<h1 align="center">
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<img
		width="300"
		alt="CoughCheck"
		src="assets/images/logo.svg?sanitize=true">
 	<br>
 	CoughCheck
</h1>

<h3 align="center">
	AI Audio App to compare cough of COVID-19 infected versus Normal cough
</h3>

<h4 align="center">Be sure to :star: us so you can keep up to date on any daily progress!</h4>

<p align="center">
	<strong>
		<a href="https://coughcheck.github.io/">Website</a>
		•
		<a href="https://trello.com/opencovid19aicoughdetectionteam">Trello</a>
		•
		<a href="http://open-covid19.slack.com/">Slack</a>
	</strong>
</p>

<div align="center">

<<<<<<< HEAD
[![MIT license.](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE) [![PRs welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md) [![dependencies Status](https://david-dm.org/OpenCOVID19CoughCheck/CoughCheckApp/status.svg)](https://david-dm.org/OpenCOVID19CoughCheck/CoughCheckApp) [![devDependencies Status](https://david-dm.org/OpenCOVID19CoughCheck/CoughCheckApp/dev-status.svg)](https://david-dm.org/OpenCOVID19CoughCheck/CoughCheckApp#info=devDependencies)  <a href="https://github.com/OpenCOVID19CoughCheck/CoughCheckApp/commits/master"><a href="https://opencollective.com/CoughCheckApp" alt="Financial Contributors on Open Collective"><img src="https://opencollective.com/CoughCheckApp/all/badge.svg?label=financial+contributors" /></a> <img src="https://img.shields.io/github/last-commit/OpenCOVID19CoughCheck/CoughCheckApp.svg?style=plasticr"/></a> [![GitHub version](https://badge.fury.io/gh/OpenCOVID19CoughCheck%2FCoughCheckApp.svg)](https://badge.fury.io/gh/OpenCOVID19CoughCheck%2FCoughCheckApp) [![Join our Slack!](https://img.shields.io/static/v1?message=join%20chat&color=9cf&logo=slack&label=slack)](https://join.slack.com/t/open-covid19/shared_invite/zt-cbji2hte-8jdoHpJDKg80ZliPVCIjqw)
=======
[![MIT license.](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE) [![PRs welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md) [![dependencies Status](https://david-dm.org/OpenCOVID19CoughCheck/CoughCheckApp/status.svg)](https://david-dm.org/OpenCOVID19CoughCheck/CoughCheckApp) [![devDependencies Status](https://david-dm.org/OpenCOVID19CoughCheck/CoughCheckApp/dev-status.svg)](https://david-dm.org/OpenCOVID19CoughCheck/CoughCheckApp#info=devDependencies) <a href="https://github.com/OpenCOVID19CoughCheck/CoughCheckApp/commits/master"><img src="https://img.shields.io/github/last-commit/OpenCOVID19CoughCheck/CoughCheckApp.svg?style=plasticr"/></a> [![GitHub version](https://badge.fury.io/gh/OpenCOVID19CoughCheck%2FCoughCheckApp.svg)](https://badge.fury.io/gh/OpenCOVID19CoughCheck%2FCoughCheckApp) [![Join our Slack!](https://img.shields.io/static/v1?message=join%20chat&color=9cf&logo=slack&label=slack)](https://join.slack.com/t/open-covid19/shared_invite/zt-cbji2hte-8jdoHpJDKg80ZliPVCIjqw)
>>>>>>> Add all-contributors

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-15-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

</div>

## Table of contents

- [Overview](#overview)
- [Roadmap](#roadmap)
  - [Data Gathering](#data-gathering)
  - [ML Processing](#ml-processing) - [COVID-19 Presumptive Detection](#covid-19-presumptive-detection)
- [Contributing](#contributing)
  - [Developers](#developers)
  - [Financial Contributors](#financial-contributors)
- [Project Status](#project-status)
- [Collaborators](#collaborators)
- [License](#license)

# Overview

The purpose of this Application is to provide the global community with a non-invasive application for personal pre-screening, anywhere and anytime, through which the user can record and upload a clip of themselves or a loved-one coughing. This repository contains source code to build the Application CoughCheck, and general information about the project.

- **Privacy aware.** Recorded coughs encrypted on device to protect user privacy.
- **Secure endpoints.** Consented associated data uploaded to external privacy-concerned repository using OAuth2.
- **Data protection.** All of the data sent through CoughCheck is owned by you, and you can remove it anytime.
- **Respect the science.** Collect data first, do not overfit/underfit the machine-learning model to publish results faster.
- **Explainable AI** Do not build black-box models, enforce debuggable models.
- **Cross platform.** It doesn't matter what OS you use, it just works wherever Node.js runs.
- **Responsive interface.** Works smoothly on every desktop, smartphone and tablet.

The Machine-Learning module will analyze the cough and determines the likelihood that the user is infected with COVID-19 as well as the other potentially crucial meta information such as the potential severity of the infection, likelihood of accompanying health concerns, etc.

# Roadmap

## Data Gathering

The first step of this project will be to release this application so that end-users can begin to upload data to.

## ML Processing

The second step is to onboard as many users as feasible (both uninfected and infected individuals) and setup machine learning capabilities within the application, which processes audio clips uploaded to discern discrepancies between the coughs of an infected individuals and the coughs of an uninfected individual.

## COVID-19 Presumptive Detection

Pivot the application to return predictions based on audio files uploaded once confidence level in ML Processing is high enough.

# Contributing

This project exists thanks to all the people who contribute. Check our general [on-boarding guide](./GETTING_INVOLVED.md).

## Developers

- If you prefer to immediately contribute with code feel free to check [our issues page](https://github.com/OpenCOVID19CoughCheck/CoughCheckApp/issues) if you want to contribute.
- If you prefer [to check the contributing guide](./CONTRIBUTING.md)
- If you have not time at all, you may still star this repository if this project can help you!

## Financial collaborators

- <a href="https://opencollective.com/coughcheckapp/donate" target="_blank"><img src="https://opencollective.com/coughcheckapp/donate/button@2x.png?color=blue" width=200 /></a> Become a financial contributor and help us sustain our community through OpenCollective
- <a href="https://liberapay.com/OpenCOVID19CoughCheck/" target="_blank"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a> You can also donate using Liberapay

# Project Status

CoughCheckApp is being actively developed. We’re currently working on partnerships with other open source projects and support from companies and Universities around the globe.

Visit the to the ToDo list to contribute or see the features in progress.

# Collaborators

The following Organizations and Companies are kindly helping us to develop a solution:

- [JOGL](https://app.jogl.io/)
- [OpenHumans](https://www.openhumans.org/)
- [OpenCollective](https://opencollective.com/)
- [Lokalise](https://lokalise.com/)

## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/OpenCOVID19CoughCheck/CoughCheckApp/graphs/contributors"><img src="https://opencollective.com/CoughCheckApp/contributors.svg?width=890&button=false" /></a>

### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/CoughCheckApp/contribute)]

#### Individuals

<a href="https://opencollective.com/CoughCheckApp"><img src="https://opencollective.com/CoughCheckApp/individuals.svg?width=890"></a>

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/CoughCheckApp/contribute)]

<a href="https://opencollective.com/CoughCheckApp/organization/0/website"><img src="https://opencollective.com/CoughCheckApp/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/CoughCheckApp/organization/1/website"><img src="https://opencollective.com/CoughCheckApp/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/CoughCheckApp/organization/2/website"><img src="https://opencollective.com/CoughCheckApp/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/CoughCheckApp/organization/3/website"><img src="https://opencollective.com/CoughCheckApp/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/CoughCheckApp/organization/4/website"><img src="https://opencollective.com/CoughCheckApp/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/CoughCheckApp/organization/5/website"><img src="https://opencollective.com/CoughCheckApp/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/CoughCheckApp/organization/6/website"><img src="https://opencollective.com/CoughCheckApp/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/CoughCheckApp/organization/7/website"><img src="https://opencollective.com/CoughCheckApp/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/CoughCheckApp/organization/8/website"><img src="https://opencollective.com/CoughCheckApp/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/CoughCheckApp/organization/9/website"><img src="https://opencollective.com/CoughCheckApp/organization/9/avatar.svg"></a>

# License

We are currently using the Open Source [MIT License](./LICENSE)

# TODOs

- [x] Adding `prettier` & `editorconfig` so we all have a consistent code (also husky so we are sure not breaking existing style rules with new commits)
- [x] Adding `native-base` to implement the login.
- [x] Adding a [SafeArea layout](https://reactnavigation.org/docs/handling-safe-area/)/Keyboard layouts, so we are safe for devices with notches and able to reuse in different views.
- [x] Add Authentication routes and Global Context.
- [x] Adding `oAuth2`.
- [ ] Migrate existing UI components from `react-native-paper` to `native-base` components. [Here their reasons](https://github.com/GeekyAnts/NativeBase#2-why-nativebase) to make this choice and for me mainly because **they are wider used** and they provide both [Sketch/Illustrator/Figma compatible design components](https://nativebase.io/sketch-template).
- [ ] I would change the styling approach from Object-based style to `styled-components`.
- [ ] Start adding tests with [`react-native-testing-library`](https://callstack.github.io/react-native-testing-library/docs/getting-started).

=======

Copyright © 2020 [OpenCOVID19CoughCheck Team](https://github.com/OpenCOVID19CoughCheck)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
