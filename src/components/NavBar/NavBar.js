import React from 'react'
import { View, Text, Platform, } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

export default function NavBar({ hidden, children, height, color, titleColor, titleTextStyle, leftComponent: LeftComponent, rightComponent: RightComponent, }) {
	return hidden ? null : (
		<View style={[ styles.navBar, { height, backgroundColor: color, } ]}>
			<View style={styles.leftButton}>
				{ LeftComponent ? <LeftComponent /> : null }
			</View>

			<View style={styles.navTitle}>
				<Text style={[ styles.navTitleText, { color: titleColor, }, titleTextStyle ]}>{children}</Text>
			</View>

			<View style={styles.rightComponent}>
				{ RightComponent ? <RightComponent /> : null }
			</View>
		</View>
	)
}

NavBar.defaultProps = {
	height: Platform.select({
		ios: 44,
		android: 56,
	}),
	color: '#FFD517',
	titleColor: 'black',
}

NavBar.propTypes = {
	hidden: PropTypes.bool,
	children: PropTypes.string,
	height: PropTypes.number,
	color: PropTypes.string,
	titleColor: PropTypes.string,
	titleTextStyle: PropTypes.object,
	leftComponent: PropTypes.func,
	rightComponent: PropTypes.func,
}