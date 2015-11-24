'use strict';

import React, {Component} from 'react';
import Router from 'react-router';
import AuthorCard from './../components/AuthorCard.jsx'


export default class AuthorsPage extends Component {

    render() {
        return (
            <div>
                <div className="mdl-grid">
                    {[1,2,3].map(function(id) {
                       return <AuthorCard key={id} id={id} />;
                    })}
                </div>
            </div>
        );
    }
}
