import PropTypes from 'prop-types';
import React from 'react';


/**
 * The default page layout component
 */
const Page = ({ pagetitle, header, main, footer, _relativeURL, _ID }) => (
	<html>
	<head>
		<meta charSet="utf-8" />
		<title>{ pagetitle } | Cuttlebelle Stay Static Sample Site</title>

		<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=PT+Serif:400,400italic,700|PT+Sans:400" />
		<link rel="stylesheet" href={ _relativeURL( '/assets/css/style.css', _ID ) } />
	</head>
	<body>
		<a href="https://github.com/staystatic/staystatic/tree/master/cuttlebelle">
			<img style={{
				position: 'absolute',
				top: 0,
				right: 0,
				border: 0,
			}} src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub" />
		</a>
		{ header }

		<div className="main">
			{ main }
		</div>

		{ footer }
	</body>
	</html>
);

Page.propTypes = {
	/**
	 * pagetitle: Homepage
	 */
	pagetitle: PropTypes.string.isRequired,

	/**
	 * header: (partials)(1)
	 */
	header: PropTypes.node.isRequired,

	/**
	 * main: (partials)(5)
	 */
	main: PropTypes.node.isRequired,

	/**
	 * footer: (partials)(1)
	 */
	footer: PropTypes.node.isRequired,
};

Page.defaultProps = {};

export default Page;
