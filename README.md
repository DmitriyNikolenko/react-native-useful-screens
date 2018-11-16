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
```javascript
	import Page from 'react-native-useful-screens'
```

# Examples

```javascript
	<Page
		headerType={Page.headerTypes.IMAGED}
		// NavBar props
		title="Page title"
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
	</Page>
```

# Demo
...

# License

MIT

# Changelog

*0.0.1* - create module.
*0.0.2* - fix imports in ImagedNavBar component.