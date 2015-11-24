'use strict';

import React, {Component} from 'react';


export default class AuthorCard extends Component {

	render() {


		return (
			<div className="mdl-cell mdl-cell--4-col">
				<div className="demo-card- mdl-card mdl-shadow--2dp">
					<div className="mdl-card__title mdl-card--expand">
						<h4>
							<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" id={this.props.id}>
								Author name
							</a>
							<ul className="mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect" htmlFor={this.props.id}>
								<li className="mdl-menu__item">Another Action</li>
								<li disabled className="mdl-menu__item">Disabled Action</li>
								<li className="mdl-menu__item">Yet Another Action</li>
							</ul>
						</h4>
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
    	componentHandler.upgradeDom();
  	}
}
