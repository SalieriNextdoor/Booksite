import {
    BOOK_LOADED,
    BOOK_LOAD_ERROR
} from '../types';

const bookReducer = (state, action) => {
    switch (action.type) {
        case BOOK_LOADED:
            return {
                ...state,
                loading: false,
                book_info: action.payload
            }
        case BOOK_LOAD_ERROR:
            return {
                ...state,
                book_info: null,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default bookReducer;