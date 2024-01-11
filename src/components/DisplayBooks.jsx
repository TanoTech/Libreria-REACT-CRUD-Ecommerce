import React, { useState } from 'react';
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';
import { Container, Row, Col, Carousel } from "react-bootstrap";
import './DisplayBooks.css';
import SingleBook from "./SingleBook";
import BookComments from "./BookComment";

const DisplayBooks = ({ searchQuery }) => {
    const [activeBookId, setActiveBookId] = useState(null);

    const filterBooks = (genre) => {
        return searchQuery
            ? genre.filter(libro => libro.title.toLowerCase().includes(searchQuery.toLowerCase()))
            : genre;
    };

    const renderCarouselItems = (genre) => {
        const chunks = [];
        for (let i = 0; i < genre.length; i += 5) {
            chunks.push(genre.slice(i, i + 5));
        }
        return chunks.map((chunk, index) => (
            <Carousel.Item key={index}>
                <Row>
                    {chunk.map((libro, idx) => (
                        <Col key={idx}>
                            <SingleBook book={libro} onSelectBook={setActiveBookId} />
                        </Col>
                    ))}
                </Row>
            </Carousel.Item>
        ));
    };

    return (
        <main className="d-flex">
            <Container>
                <h1>Fantasy</h1>
                <Carousel>
                    {renderCarouselItems(filterBooks(fantasy))}
                </Carousel>
                <h1>History</h1>
                <Carousel>
                    {renderCarouselItems(filterBooks(history))}
                </Carousel>
                <h1>Horror</h1>
                <Carousel>
                    {renderCarouselItems(filterBooks(horror))}
                </Carousel>
                <h1>Romance</h1>
                <Carousel>
                    {renderCarouselItems(filterBooks(romance))}
                </Carousel>
                <h1>Sci-Fi</h1>
                <Carousel>
                    {renderCarouselItems(filterBooks(scifi))}
                </Carousel>
            </Container>
            <BookComments bookId={activeBookId} />
        </main>
    );
};

export default DisplayBooks;
