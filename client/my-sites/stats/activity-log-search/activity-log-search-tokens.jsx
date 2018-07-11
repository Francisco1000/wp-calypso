/** @format */

/**
 * External dependencies
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { localize } from 'i18n-calypso';

class ActivityLogSearchTokens extends Component {
	static propTypes = {
		filter: PropTypes.object.isRequired,
	};
	render() {
		return <p>tokens</p>;
	}
}

export default localize( ActivityLogSearchTokens );
