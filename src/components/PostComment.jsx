import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import './DisplayBooks.css';

const PostComment = ({ asin }) => {
    const [comment, setComment] = useState({
        comment: '',
        rate: 1,
        elementId: asin,
    });

    useEffect(() => {
        setComment(prevComment => ({
            ...prevComment,
            elementId: asin,
        }));
    }, [asin]);

    const sendComment = async (e) => {
        e.preventDefault();
        const tokenAPI = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmI0M2UwZGQxZDAwMTgyZDE3NWIiLCJpYXQiOjE3MDQ3MjEyMjAsImV4cCI6MTcwNTkzMDgyMH0.s5rqSKWOIz6A5AuFwCS3c0KwCT7UVpkD84qzWWQHjKk';
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(comment),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${tokenAPI}`,
                },
            });
            if (response.ok) {
                setComment({
                    comment: '',
                    rate: 1,
                    elementId: asin,
                });
                alert('Comment successfully submitted');
            } else {
                console.error('error');
            }
        } catch (error) {
            console.error('error', error);
        }
    };

    return (
        <div className="my-3">
            <Form onSubmit={sendComment}>
                <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                        as="select"
                        value={comment.rate}
                        onChange={(e) => setComment({
                            ...comment,
                            rate: e.target.value,
                        })}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Comment text</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Add comment here"
                        value={comment.comment}
                        onChange={(e) => setComment({
                            ...comment,
                            comment: e.target.value,
                        })}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default PostComment;
