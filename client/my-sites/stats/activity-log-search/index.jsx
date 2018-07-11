/** @format */

/**
 * External dependencies
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { localize } from 'i18n-calypso';
import { omit, isEmpty } from 'lodash';

/**
 * Internal dependencies
 */
import Gridicon from 'gridicons';
import ActivityLogSearchTokens from './activity-log-search-tokens';

class ActivityLogSearch extends Component {
	static propTypes = {
		translate: PropTypes.func.isRequired,
		filter: PropTypes.object.isRequired,
	};

	filters = [
		{
			key: 'activity_type',
			label: 'Activity type',
			icon: 'types',
		},
		{
			key: 'time',
			label: 'Time',
			icon: 'time',
		},
	];

	hasTokens() {
		return ! isEmpty( omit( this.props.filter, 'page' ) );
	}

	render() {
		const { translate, filter } = this.props;

		return (
			<section className="activity-log-search">
				{ this.hasTokens() && <ActivityLogSearchTokens filter={ filter } /> }
				<div className="activity-log-search__filters">
					<div className="activity-log-search__filters-header">{ translate( 'Search by' ) }</div>
					<div className="activity-log-search__filters-categories">
						{ this.filters.map( ( { icon, key, label } ) => (
							<div className="activity-log-search__filter" key={ key }>
								<Gridicon icon={ icon } className="activity-log-search__filter-icon" size={ 18 } />
								{ label }
							</div>
						) ) }
					</div>
				</div>
			</section>
		);
	}
}

export default localize( ActivityLogSearch );
