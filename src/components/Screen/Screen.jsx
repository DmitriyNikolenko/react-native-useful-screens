import React from 'react'
import { ScrollView, SafeAreaView, Platform, } from 'react-native'
import PropTypes from 'prop-types'
import Placeholder from '../Placeholder'
import { headerTypes, config, SCROLL_EVENT_THROTTLE, } from './settings'
import styles from './styles'

export default class Page extends React.Component {
	static headerTypes = headerTypes

	static propTypes = {
		// Page content.
		children: PropTypes.node,
		topComponent: PropTypes.func,
		footerComponent: PropTypes.func,
		// Headers props.
		headerType: PropTypes.oneOf(Object.values(headerTypes)),
		title: PropTypes.string,
		height: PropTypes.number,
		expandedHeight: PropTypes.number,
	}

	static defaultProps = {
		height: Platform.select({ ios: 44, android: 56, }),
		headerType: headerTypes.NONE,
	}

	state = {
		offsetY: 0, // vertical scrolling offset.
	}

	handleScroll = event => this.setState({
		offsetY: Math.floor(event.nativeEvent.contentOffset.y),
	})

	render() {
		const { children, headerType, title, height, expandedHeight, topComponent: TopComponent, footerComponent: FooterComponent, ...headerProps } = this.props
		const { offsetY, } = this.state
		const { component: HeaderComponent, isDynamic, } = config[headerType]

		return (
			<SafeAreaView style={styles.safeAreaView} >
				{ HeaderComponent ? (
					<HeaderComponent
						height={height}
						offsetY={isDynamic ? offsetY : undefined}
						expandedHeight={expandedHeight}
						{...headerProps}
					>
						{title}
					</HeaderComponent>
				) : null }
				{ TopComponent ? <TopComponent /> : null}
				<ScrollView
					keyboardDismissMode="on-drag"
					keyboardShouldPersistTaps="always"
					scrollEventThrottle={SCROLL_EVENT_THROTTLE}
					onScrollEndDrag={isDynamic ? this.handleScroll : undefined}
					onMomentumScrollEnd={isDynamic ? this.handleScroll : undefined}
					onScroll={isDynamic ? this.handleScroll : undefined}
				>
					<Placeholder height={expandedHeight ? expandedHeight - height : (isDynamic ? height : 0)} />
					{children}
				</ScrollView>
				{ FooterComponent ? <FooterComponent /> : null}
			</SafeAreaView>
		)
	}
}