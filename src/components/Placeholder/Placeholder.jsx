import React from 'react'
import { View, } from 'react-native'
import PropTypes from 'prop-types'

export default function Placeholder({ height, }) {
	return (
		<View style={{ height, }} />
	)
}

Placeholder.defaultProps = {
	height: 0,
}

Placeholder.propTypes = {
	height: PropTypes.number,
}