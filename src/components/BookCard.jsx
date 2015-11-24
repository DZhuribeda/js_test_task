'use strict';

import React, {Component} from 'react';


export default class BookCard extends Component {


	render() {
		return (
			<div className="mdl-cell mdl-cell--4-col">
				<div className="demo-card- mdl-card mdl-shadow--2dp">
					<div className="mdl-card__title mdl-card--expand">
						<h4>
							BookName
						</h4>
					</div>
					<div className="mdl-card__actions mdl-card--border">
						<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
							Author name
						</a>

						<div className="mdl-layout-spacer"></div>
					</div>
				</div>
			</div>
		);
	}
}
