import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


/**
 * The header component
 */
const Header = ({ left, right, _relativeURL, _ID }) => (
	<div id="header">
		<table width="100%">
			<td>
				<a href={ _relativeURL( left.url, _ID ) }>{ left.title }</a>
			</td>
			<td style={{ textAlign: 'right' }}>
				<a href={ _relativeURL( right.url, _ID ) }>{ right.title }</a>
			</td>
		</table>
	</div>
);

Header.propTypes = {
	/**
	 * left:
	 *   title: Cuttlebelle Stay Static Sample Site
	 *   url: /
	 */
	left: PropTypes.shape({
		title: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
	}).isRequired,

	/**
	 * right:
	 *   title: About
	 *   url: /about
	 */
	right: PropTypes.shape({
		title: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
	}).isRequired,
};

Header.defaultProps = {};

export default Header;
