import React, { Component } from 'react';
import Book from './Book';

class Books extends Component {
    render() { 
        return (
            <>
                {this.props.books.map(book => {
                    return (
                        <Book key={book.id} name={book.name} price={book.price} />
                    )
                })
                }
            </>
        );
    }
}
 
export default Books;