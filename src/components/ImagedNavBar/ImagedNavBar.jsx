import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, Image, View, } from 'react-native'
import NavBar from '../NavBar'
import Placeholder from './Placeholder'
import styles from './styles'
import { between, } from '../../helpers'

export default class ImagedNavBar extends React.Component {
	static propTypes = {
		hidden: PropTypes.bool,
		children: PropTypes.string,
		imageSrc: PropTypes.node.isRequired,
		color: PropTypes.string,
		expandedTitleColor: PropTypes.string,
	}

	static defaultProps = {
		color: '#FFD517',
		expandedTitleColor: 'white',
	}

	state = {
		floatTabBarHeight: this.props.expandedHeight,
		collapsePercent: 100,
		offsetY: 0, // cached
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.offsetY !== prevState.offsetY) {
			const { offsetY, expandedHeight, height, } = nextProps
			const floatTabBarHeight = Math.floor(between(expandedHeight - offsetY, height, expandedHeight))
			const collapsePercent = Math.floor(between(100 - (offsetY / ((expandedHeight - height) / 100)), 0, 100))

			return collapsePercent === prevState.collapsePercent
				? { offsetY, }
				: { offsetY, floatTabBarHeight, collapsePercent, }
		}

		return null
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.collapsePercent !== nextState.collapsePercent
	}

	render() {
		const { hidden, height, children, imageSrc, expandedTitleColor, color, ...navBarProps } = this.props
		const { floatTabBarHeight, collapsePercent, } = this.state
		const displayNavBar = collapsePercent < 10
		const opacity = collapsePercent / 100

		return hidden ? null : (
			<>
				<View style={[ styles.navPlaceholder, { height: floatTabBarHeight, backgroundColor: color, } ]}>
					<NavBar
						hidden={!displayNavBar}
						{...navBarProps}
						color="tranparent"
					>
						{children}
					</NavBar>
					<NavBar
						hidden={displayNavBar}
						color="tranparent"
						titleColor={expandedTitleColor}
						titleTextStyle={styles.navTitleTextShadow}
					>
						{children}
					</NavBar>
					<Image
						style={[ styles.imagePicture, { opacity, } ]}
						source={imageSrc}
					/>
				</View>

				<Placeholder height={height} />
			</>
		)
	}
}