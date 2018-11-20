import React from 'react'
import PropTypes from 'prop-types'
import { View, } from 'react-native'
import NavBar from '../NavBar'
import { between, } from '../../helpers'
import styles from './styles'

export default class FloatingNavBar extends React.Component {
	static propTypes = {
		floatingRatio: PropTypes.number,
		height: PropTypes.number,
	}

	static defaultProps = {
		floatingRatio: 3,
	}

	state = {
		translateY: 0,
		offsetY: 0, // cached
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.offsetY !== prevState.offsetY) {
			const { offsetY, floatingRatio, height, } = nextProps
			const floating = nextProps.offsetY > prevState.offsetY ? floatingRatio : 1
			const translateY = Math.floor(between(prevState.translateY + (prevState.offsetY - offsetY) / floating, -height, 0))

			return translateY === prevState.translateY
				? { offsetY, }
				: { offsetY, translateY, }
		}

		return null
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.translateY !== nextState.translateY
	}

	render() {
		const { children, ...navBarProps } = this.props
		const { translateY, } = this.state

		return (
			<>
				<View
					style={[ styles.floatingNavBar, { transform: [ { translateY: translateY, } ], } ]}
				>
					<NavBar {...navBarProps}>{children}</NavBar>
				</View>
			</>
		)
	}
}