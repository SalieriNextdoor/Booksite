import React, { useReducer } from 'react';
import axios from 'axios';
import BookContext from './bookContext';
import bookReducer from './bookReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
    BOOK_LOADED,
    BOOK_LOAD_ERROR,
    REVIEW_POSTED,
    REVIEW_POST_ERROR,
    SCORE_UPDATED,
    SCORE_UPDATE_ERROR,
    BOOKS_SEARCHED,
    BOOK_SEARCH_ERROR,
    SET_TEMP_INFO
} from '../types';


const BookState = props => {
    const initialState = {
        book_info: null,
        loading: true,
        error: null
    };

    const [state, dispatch] = useReducer(bookReducer, initialState);

    // Set temp book info
    const setTempInfo = data => {
        dispatch({type: SET_TEMP_INFO, payload: data})
    }

    // Search Books
    const searchBooks = async text => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/book/', text, config);
            dispatch({type: BOOKS_SEARCHED, payload: res.data})
        } catch (err) {
            console.log(err);
            dispatch({type: BOOK_SEARCH_ERROR, payload: err});
        }
    }

    // Load Book
    const loadBook = async book_id => {
        try {
            const res = await axios.get(`/api/book/${book_id}`);
            dispatch({type: BOOK_LOADED, payload: res.data})
        } catch (err) {
            console.log(err);
            dispatch({type: BOOK_LOAD_ERROR, payload: err})
        }
    }

    // Post Review
    const postReview = async (reviewData, book_id) => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post(`/api/book/review/${book_id}`, reviewData, config);
            dispatch({type: REVIEW_POSTED, payload: res.data});
        } catch (err) {
            dispatch({type: REVIEW_POST_ERROR, payload: err})
        }
    }

    // Update Score
    const updateScore = async (score, book_id) => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.put(`/api/book/${book_id}`, score, config);
            dispatch({type: SCORE_UPDATED, payload: res.data});
        } catch (err) {
            dispatch({type: SCORE_UPDATE_ERROR, payload: err.response.data})
        }
    }

    return (
        <BookContext.Provider
        value={{
            book_info: state.book_info,
            book_data: state.book_data,
            loading: state.loading,
            error: state.error,
            setTempInfo,
            loadBook,
            searchBooks,
            postReview,
            updateScore,
        }}
        >
            {props.children}
        </BookContext.Provider>
    );
};

export default BookState;