'use strict';

import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import AuthorCard from './../components/AuthorCard.jsx'
import {loadAuthors} from '../actions' 

class AuthorsListPage extends Component {

		componentWillMount(){
			this.setState({
				authorsLoaded: false
			});
			this.props.loadAuthors();
		}

		componentWillReceiveProps (nextProps){
   
			let result = {}
			if(nextProps.authors) 
			  result = {authorsLoaded: true};
			else
			  result = {authorsLoaded: false};	
			

			this.setState(result);
	  }


		render() {
				const { authors } = this.props;
				const { authorsLoaded } = this.state;
				let Authors;
				if (authorsLoaded) {
				  Authors=authors.map((author) => (<AuthorCard key={author.id} data={author} />));
				}
				return (
						<div>
								<div className="mdl-grid">
										{Authors}
								</div>
						</div>
				);
		}
}


AuthorsListPage.propTypes = {
	authors: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
	return {
		authors: state.authors
	}
}

export default connect(
	mapStateToProps,
	{loadAuthors}
)(AuthorsListPage)


