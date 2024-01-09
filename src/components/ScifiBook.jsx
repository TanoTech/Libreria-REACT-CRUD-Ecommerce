import React, { useState } from 'react';
import scifi from '../data/scifi.json';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DisplayBooks.css';
import SingleBook from './SingleBook';
import BookComments from './BookComment';

const ScifiBook = ({ searchQuery }) => {
    const [displayCount, setDisplayCount] = useState(10);
    const [activeBookId, setActiveBookId] = useState(null);

    const handleChange = (e) => {
        setDisplayCount(e.target.value);
    };

    const displayedBooks = scifi.slice(0, displayCount);
    const filteredScifi = searchQuery ? displayedBooks.filter((libro) =>
        libro.title.toLowerCase().includes(searchQuery.toLowerCase())) : displayedBooks;

    return (
        <main className='d-flex'>
            <Container>
                <h1 as={Link} to='/scifi'>Scifi</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>Numero di libri da visualizzare</Form.Label>
                        <Form.Control className='displayBook' as="select" value={displayCount} onChange={handleChange}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Row>
                    {filteredScifi.map((libro, index) => (
                        <Col key={index} >
                            <SingleBook book={libro} onSelectBook={() => setActiveBookId(libro.asin)} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <BookComments bookId={activeBookId} />
        </main>
    );
};

export default ScifiBook;