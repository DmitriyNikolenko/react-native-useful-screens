import NavBar from '../NavBar'
import FloatingNavBar from '../FloatingNavBar'
import ImagedNavBar from '../ImagedNavBar'

export const SCROLL_EVENT_THROTTLE = 12

export const headerTypes = Object.freeze({
	NONE: 'none',
	SIMPLE: 'simple',
	FLOATING: 'floating',
	IMAGED: 'imaged',
})

export const config = Object.freeze({
	[headerTypes.NONE]: Object.freeze({ component: null, isDynamic: false, }),
	[headerTypes.SIMPLE]: Object.freeze({ component: NavBar, isDynamic: false, }),
	[headerTypes.FLOATING]: Object.freeze({ component: FloatingNavBar, isDynamic: true, }),
	[headerTypes.IMAGED]: Object.freeze({ component: ImagedNavBar, isDynamic: true, }),
})