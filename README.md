# Contents
* [About](#about)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Changelog](#changelog)

# About
A set of screens with headers for React Native.

# Installation

```
npm install react-native-useful-screens
```
or 
```
yarn add react-native-useful-screens
```

# Usage

## Import
```javascript
import Screen from 'react-native-useful-screens'
```

## Screen props
| props           | description             | default                 | type |   headerType   |
|-----------------|-------------------------|-------------------------|------|----------------|
| headerType      | Type of header          | Screen.headerTypes.NONE | oneOf([Screen.headerTypes.NONE, Screen.headerTypes.SINGLE, Screen.headerTypes.FLOATING, Screen.headerTypes.IMAGED]) | all |
| title           | Header title            | undefined               | string  | all |
| height          | height of header        | ios: 44, android: 56    | number | all |
| color           | Header color            | undefined               | string   | all |
| children        | Screen content          | undefined               | React.Node | all |
| topComponent    | Component above content | undefined               | React.Node | all |
| footerComponent | Component below content | undefined               | React.Node | all |
| floatingRatio   | speed of expand header    | 3  | number | 'floating' |
| expandedHeight  | height of expanded header | ios: 44, android: 56  | number | 'imaged' |
| imageSrc        | image source for header   | undefined  | required image | 'imaged' |


## Header types
- *'none'* - Screen.headerTypes.NONE
- *'single'* - Screen.headerTypes.SINGLE
- *'floating'* - Screen.headerTypes.FLOATING
- *'imaged'* - Screen.headerTypes.IMAGED

## Example

```javascript
<Screen
	// Screen props
	headerType={Screen.headerTypes.IMAGED}
	topComponent={TabBar}
	footerComponent={Footer}
	// Single header props
	title="Screen title"
	color="orange"
	leftComponent={DrawerMenuButton}
	rightComponent={AppNavMenu}
	// Imaged header props
	imageSrc={require('./images/header-bg')}
	expandedHeight={240}
>
	<Text>Content</Text>
</Screen>
```

## Demo

| Screen.headerTypes.FLOATING | Screen.headerTypes.IMAGED |
| ------------- |:-------------:|
| ![floating navbar](/demo/floating.gif "headerType={Screen.headerTypes.FLOATING}") |  ![imaged navbar](/demo/imaged.gif "headerType={Screen.headerTypes.IMAGED}") |

# License

MIT

# Changelog

- *0.0.4* - update docs
- *0.0.3* - fixed collapsing bug in FloatingNavBar
- *0.0.2* - fixed imports in ImagedNavBar component, adding demo gifs, update docs
- *0.0.1* - created module.