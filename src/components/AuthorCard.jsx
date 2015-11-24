'use strict';

import React, {Component} from 'react';


export default class AuthorCard extends Component {


	getBooksList() {
        if (!this.props.data.books) {
            return null;
        }

        return this.props.data.books.map((book) => {
            return <li className="mdl-menu__item">{book.name}</li>;
        });
    }

	render() {


		return (
			<div className="mdl-cell mdl-cell--4-col">
				<div className="demo-card- mdl-card mdl-shadow--2dp">
					<div className="mdl-card__title mdl-card--expand">
						<h4>
							<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" id={this.props.data.id}>
								{this.props.data.name}
							</a>
							<ul className="mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect" htmlFor={this.props.data.id}>
								<li className="mdl-menu__item">{this.props.data.name}</li>
								{this.getBooksList()}
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
