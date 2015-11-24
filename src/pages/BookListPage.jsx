'use strict';

import React, {Component} from 'react';
import Router from 'react-router';
import BookCard from './../components/BookCard.jsx'

export default class BookListPage extends Component {

    render() {
        return (
            <div>
                <div className="mdl-grid">
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                </div>
            </div>
        );
    }
}
