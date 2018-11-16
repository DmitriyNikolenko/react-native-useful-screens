import { StyleSheet, } from 'react-native'

export default StyleSheet.create({
	navPlaceholder: {
		justifyContent: 'flex-end',
		position: 'absolute',
		width: '100%',
	},

	imagePicture: {
		zIndex: -1,
		position: 'absolute',
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	},

	navTitleTextShadow: {
		textShadowColor: '#000',
		textShadowRadius: 20,
	},
})