# Contents
* [About](#about)
* [Installation](#installation)
* [Usage](#usage)
* [Examples](#examples)
* [Demo](#demo)
* [License](#license)
* [Changelog](#changelog)

# About

# Installation

`npm install git+https://git@github.com/DmitriyNikolenko/react-native-useful-screens.git` 
or 
`yarn add git+https://git@github.com/DmitriyNikolenko/react-native-useful-screens.git`

# Usage

## Import
```javascript
	import Screen from 'react-native-useful-screens'
```

## Screen props
| props      | description    | default                 | type                                                                                                                |   |
|------------|----------------|-------------------------|---------------------------------------------------------------------------------------------------------------------|---|
| headerType | Type of header | Screen.headerTypes.NONE | oneOf([Screen.headerTypes.NONE, Screen.headerTypes.SINGLE, Screen.headerTypes.FLOATING, Screen.headerTypes.IMAGED]) |   |
| title      | Header title   | undefined               | string                                                                                                              |   |
| color      | Header color   | undefined               | string  

# Examples

```javascript
	<Screen
		headerType={Screen.headerTypes.IMAGED}
		// NavBar props
		title="Screen title"
		color="orange"
		leftComponent={DrawerMenuButton}
		rightComponent={AppNavMenu}
		// ImagedNavBar props
		imageSrc={require('./images/header-bg')}
		expandedHeight={240}
		// Content props
		footerComponent={Footer}
	>
		<Text>Hello world!</Text>
	</Screen>
```

# Demo

| Screen.headerTypes.FLOATING | Screen.headerTypes.IMAGED |
| ------------- |:-------------:|
| ![floating navbar](/demo/floating.gif "headerType={Screen.headerTypes.FLOATING}") |  ![imaged navbar](/demo/imaged.gif "headerType={Screen.headerTypes.IMAGED}") |

# License

MIT

# Changelog

*0.0.1* - created module.
*0.0.2* - fixed imports in ImagedNavBar component, adding demo gifs, update docs