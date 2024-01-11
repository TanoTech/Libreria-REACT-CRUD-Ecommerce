import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const SingleBook = ({ book, onSelectBook }) => {
    return (
        <>
            <Card style={{ width: '100%' }} onClick={() => onSelectBook(book.asin)}>
                <Card.Img variant="top" src={book.img} className="img-fluid" />
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{book.category} - {book.price} €</ListGroupItem>
                </ListGroup>
            </Card>
        </>
    );
}

export default SingleBook;
