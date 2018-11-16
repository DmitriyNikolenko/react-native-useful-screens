import { StyleSheet, Platform, } from 'react-native'

const NAVBAR_HEIGHT = Platform.select({
	ios: 44,
	android: 56,
})

export default StyleSheet.create({
	navBar: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	leftButton: {
		flexGrow: 0,
		width: NAVBAR_HEIGHT,
		justifyContent: 'center',
		alignItems: 'center',
	},

	rightComponent: {
		flexGrow: 0,
		flexShrink: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	navTitle: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
	},

	navTitleText: {
		fontSize: 20,
		fontWeight: 'bold',
	},
})