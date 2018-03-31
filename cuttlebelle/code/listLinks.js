import PropTypes from 'prop-types';
import React from 'react';
import Path from 'path';
import Fs from 'fs';


/**
 * The listing links component
 */
const ListLinks = ({ title, _parseYaml, _relativeURL, _ID }) => {

	const links = _parseYaml(
		Fs.readFileSync(
			Path.normalize(`${ __dirname }/../_data/links.yml`),
			{ encoding: 'utf8' }
		)
	);

	return (
		<div>
			<b>{ title }</b>
			<ul className="links">
				{
					links.map( ( link, i ) =>
						<li key={ i }>
							<a href={ _relativeURL( link.url, _ID ) }>{ link.title }</a>
						</li>
					)
				}
			</ul>
		</div>
	);
};

ListLinks.propTypes = {
	/**
	 * title: "Links 'n' Bookmarks"
	 */
	title: PropTypes.string.isRequired,
};

ListLinks.defaultProps = {};

export default ListLinks;
