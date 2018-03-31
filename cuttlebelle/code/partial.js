import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


/**
 * The partial component
 */
const Partial = ({ title, _body, _self }) => {
	const self = _self.split('/');

	return (
		<div id={ Slugify( self[ self.length - 1 ].replace('.md', '') ) }>
			{
				title && <h1>{ title }</h1>
			}
			{ _body }
		</div>
	);
};

Partial.propTypes = {
	/**
	 * title: About
	 */
	title: PropTypes.string,

	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Partial.defaultProps = {};

export default Partial;
