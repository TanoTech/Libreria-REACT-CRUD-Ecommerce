import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const GetComment = ({ bookId }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);

    const tokenAPI = useMemo(() => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmI0M2UwZGQxZDAwMTgyZDE3NWIiLCJpYXQiOjE3MDQ3MjEyMjAsImV4cCI6MTcwNTkzMDgyMH0.s5rqSKWOIz6A5AuFwCS3c0KwCT7UVpkD84qzWWQHjKk', []);

    const fetchData = async (id) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
                headers: {
                    "Authorization": `Bearer ${tokenAPI}`
                }
            });
            setComments(response.data);
        } catch (error) {
            console.error("Si è verificato un errore!", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (bookId) {
            fetchData(bookId);
        }
    }, [bookId]);

    if (loading) {
        return <Spinner animation="border" />;
    }

    return (
        <div>
            {comments.map((comment, index) => (
                <div key={index}>
                    <p>{"⭐️".repeat(comment.rate)}</p>
                    <p>{comment.comment}</p>
                </div>
            ))}
            <hr />
        </div>
    );
};

export default GetComment;
