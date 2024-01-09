import React, { useEffect } from 'react';
import GetComment from './GetComment';
import PostComment from './PostComment';
import { Container } from 'react-bootstrap';

const BookComments = ({ bookId }) => {
    useEffect(() => {
        console.log("ID del libro aggiornato:", bookId);
    }, [bookId]); 
    return (
        <aside>
            <Container>
                <div><h1>Comments</h1></div>
                <div>
                    <GetComment bookId={bookId} />
                    <PostComment asin={bookId} />
                </div>
            </Container>
        </aside>
    );
}

export default BookComments;