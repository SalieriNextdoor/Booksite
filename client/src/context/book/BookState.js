import React, { useReducer } from 'react';
import axios from 'axios';
import BookContext from './bookContext';
import bookReducer from './bookReducer';
import {
    BOOK_LOADED,
    BOOK_LOAD_ERROR
} from '../types';

const BookState = props => {
    const initialState = {
        book_info: null,
        loading: true,
        error: null
    };

    const [state, dispatch] = useReducer(bookReducer, initialState);

    // Load Book
    const loadBook = async book_id => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.get(`/api/book/${book_id}`, config);
            dispatch({type: BOOK_LOADED, payload: res.data})
        } catch (err) {
            dispatch({type: BOOK_LOAD_ERROR, payload: err.response.data})
        }
    }

    return (
        <BookContext.Provider
        value={{
            book_info: state.book_info,
            loading: state.loading,
            error: state.error,
            loadBook
        }}
        >
            {props.children}
        </BookContext.Provider>
    );
};

export default BookState;