import React, {Fragment, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import BookContext from '../../context/book/bookContext';
import NavbarDashboard from '../layout/NavbarDashboard';

const BookPage = props => {
    const { match: {params} } = props;

    const bookContext = useContext(BookContext);

    const {loadBook, book_info, error} = bookContext;

    useEffect(() => {
        loadBook(params.book_id);

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (error) {
            props.history.push('/404')
        }

        // eslint-disable-next-line
    }, [error])

    return (
        <Fragment>
            <NavbarDashboard />
            <div className="bookpage-grid">
                <div className="bookpage-grid-item">
                    {book_info ? (
                        <div className="book-img"><img src={book_info.img} alt=""/></div>
                    ) : (<span></span>)}
                    
                </div>
                <div className="bookpage-grid-item">
                    <div className="book-text">
                        {book_info ? (
                            <Fragment>
                                <h2>{book_info.title}</h2>
                                <h5>{book_info.author}</h5>
                                <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star-half-alt"></i> <i className="far fa-star"></i> <span>3.47 · 1,200 votos</span>
                                <p>{book_info.synopsis}</p>
                            </Fragment>
                        ) : (<span></span>)}
                        
                    </div>
                    {(book_info) ? (
                        <div className="book-reviews">
                        <h3>Reviews de Usuários</h3>
                        {(book_info.book_reviews) ? (
                            <Fragment>
                            {book_info.book_reviews.map((review, idx) => {
                                return(
                            <div key={idx} className="book-review">
                                <div className="top-text">
                                <Link to="/">{review.user_name}</Link>
                                    <p>{review.date}</p>
                                    <p>Nota: {[...Array(Math.floor(review.score)).keys()].map((_, idxa) => {
                                        return (
                                            <i key={`${idxa}a`} className="fas fa-star"></i>
                                        )
                                    })}
                                    {((Math.floor(review.score) - review.score) !== 0) ? (<i className="fas fa-star-half-alt"></i>) : (<span></span>)}
                                    {[...Array(5 - Math.ceil(review.score)).keys()].map((_, idxb) => {
                                        return(
                                            <i key={`${idxb}b`} className="far fa-star"></i>
                                        )
                                    })}
                                    </p>
                                    <p>{review.text}</p>
                                </div>
                            </div>)
                            })}
                            </Fragment>
                        ) : (<div className="no-review">Nenhuma review encontrada.</div>)}
                        <Link to={`/writereview/${params.book_id}`}>Escreva uma review</Link>
                        
                    </div>
                    ) : (<span></span>)}
                </div>
            </div>
        </Fragment>
    );
}

export default BookPage;