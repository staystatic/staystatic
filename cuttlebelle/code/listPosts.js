import PropTypes from 'prop-types';
import React from 'react';


/**
 * The listing posts component
 */
const ListPosts = ({ title, _pages, _relativeURL, _ID }) => (
	<div>
		<b>{ title }</b>
		<ul className="news">
			{
				Object.keys( _pages )
					.filter( page => _pages[ page ]._url.startsWith('/posts/') )
					.sort( ( a, b ) => new Date( _pages[ b ].date ) - new Date( _pages[ a ].date ) )
					.map( ( page, i ) =>
						<li key={ i }>
							<a href={ _relativeURL( _pages[ page ]._url, _ID ) }>{ _pages[ page ].pagetitle }</a>
						</li>
					)
			}
		</ul>
	</div>
);

ListPosts.propTypes = {
	/**
	 * title: "News 'n' Updates"
	 */
	title: PropTypes.string.isRequired,
};

ListPosts.defaultProps = {};

export default ListPosts;
