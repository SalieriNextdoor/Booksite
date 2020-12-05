import {
    BOOK_LOADED,
    BOOK_LOAD_ERROR,
    REVIEW_POSTED,
    REVIEW_POST_ERROR,
    SCORE_UPDATED,
    SCORE_UPDATE_ERROR,
    BOOKS_SEARCHED,
    BOOK_SEARCH_ERROR,
    BOOK_ENTRY_DELETED,
    BOOK_ENTRY_DELETE_ERROR,
    SET_TEMP_INFO
} from '../types';

const bookReducer = (state, action) => {
    switch (action.type) {
        case BOOK_LOADED:
        case BOOKS_SEARCHED:
            return {
                ...state,
                loading: false,
                book_info: action.payload
            }
        case SCORE_UPDATED:
        case REVIEW_POSTED:
        case BOOK_ENTRY_DELETED:
            return {
                ...state,
                loading: false
            }
        case SET_TEMP_INFO:
            return {
                ...state,
                book_info: {
                    title: action.payload.title,
                    img: action.payload.img
                }
            }
        case SCORE_UPDATE_ERROR:
        case REVIEW_POST_ERROR:
        case BOOK_LOAD_ERROR:
        case BOOK_SEARCH_ERROR:
        case BOOK_ENTRY_DELETE_ERROR:
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