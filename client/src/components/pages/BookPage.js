import React, {Fragment, useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {setStarScore} from '../../utils/setStarScore';
import BookContext from '../../context/book/bookContext';
import AuthContext from '../../context/auth/authContext';
import NavbarDashboard from '../layout/NavbarDashboard';
import NavbarHome from '../layout/NavbarHome';

const BookPage = props => {
    const { match: {params} } = props;

    const bookContext = useContext(BookContext);
    const authContext = useContext(AuthContext);

    const {loadBook, updateScore, book_info, error} = bookContext;
    const {isAuthenticated, loadUser, user} = authContext;

    const [score_info, setScoreInfo] = useState({
        scores_num: null,
        book_scores_avg: null
    });

    const {scores_num, book_scores_avg} = score_info;

    useEffect(() => {
        loadUser();
        loadBook(params.book_id);
        
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (error) {
            props.history.push('/404')
        }

        if (book_info) {
            if (book_info.synopsis) {
                if (Object.values(book_info.book_score).length !== 0) {
                    setScoreInfo({...score_info, scores_num: Object.values(book_info.book_score).length, book_scores_avg: (Object.values(book_info.book_score).reduce((a, b) => a + b, 0))/(Object.values(book_info.book_score).length)})
                } else {
                    setScoreInfo({...score_info, scores_num: 0, book_scores_avg: 0})
                }
            }
        }

        if (isAuthenticated && book_info) {
            if (book_info.synopsis) {
                setStarScore();
            }
        }

        // eslint-disable-next-line
    }, [error, isAuthenticated, book_info])

    const [scoreState, setScore] = useState({
        score: null
    })

    let {score} = scoreState;

    const onChange = e => setScore({...scoreState, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault();
        updateScore({score, user_id: user._id, book_info}, params.book_id);
    }

    return (
        <Fragment>
            {isAuthenticated ? (<NavbarDashboard />) : (<NavbarHome />)}
            <div className="bookpage-grid">
                <div className="bookpage-grid-item">
                    {book_info ? (
                    <Fragment>
                        <div className="book-img">
                            <img src={book_info.img} alt=""/>
                            {book_info.synopsis ? (
                            <Fragment>
                            {isAuthenticated ? (
                        <div className="star-score">
                        <form id="star-form" onSubmit={onSubmit}>
                            <div id="star-input" className="star-input">
                                <h5>Score</h5>
                                <div id="stars">
                                {(book_info.book_score[user._id] && book_info.synopsis) ? (
                                    <Fragment>
                                        {[...Array(Math.floor(book_info.book_score[user._id])).keys()].map((_, idxa) => {
                                        return (
                                            <button key={`${idxa}a3`} type="submit"><i id={`${idxa+1}-star`} className="fas fa-star"></i></button>
                                        )
                                    })}
                                    {((Math.floor(book_info.book_score[user._id]) - book_info.book_score[user._id]) !== 0) ? (<button type="submit"><i id={`${Math.floor(book_info.book_score[user._id])+1}-star`} className="fas fa-star-half-alt"></i></button>) : (<span></span>)}
                                    {[...Array(5 - Math.ceil(book_info.book_score[user._id])).keys()].map((_, idxb) => {
                                        return(
                                            <button key={`${idxb}b3`} type="submit"><i id={`${idxb+Math.ceil(book_info.book_score[user._id])+1}-star`} className="far fa-star"></i></button>
                                        )
                                    })}
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <button type="submit"><i id="1-star" className="far fa-star"></i></button>
                                        <button type="submit"><i id="2-star" className="far fa-star"></i></button>
                                        <button type="submit"><i id="3-star" className="far fa-star"></i></button>
                                        <button type="submit"><i id="4-star" className="far fa-star"></i></button>
                                        <button type="submit"><i id="5-star" className="far fa-star"></i></button>
                                    </Fragment>
                                )}
                                </div>
                                
                            </div>
                            <input onInput={onChange}  type="hidden" id="score-input" name="score"/>
                        </form>
                        </div>
                    ) : (<span></span>)}                            
                            </Fragment>
                    ) : (<span></span>)}
                    </div>
                    </Fragment>
                    ) : (<span></span>)}
                    
                </div>

                <div className="bookpage-grid-item">
                    <div className="book-text">
                        {book_info ? (
                            <Fragment>
                                <h2>{book_info.title}</h2>
                                {(book_info.synopsis) ? (
                                <Fragment>
                                <h5>{book_info.author}</h5>
                                {book_scores_avg || book_scores_avg === 0 ? (
                                    <Fragment>
                                        {[...Array(Math.floor(book_scores_avg)).keys()].map((_, idxa) => {
                                        return (
                                            <i key={`${idxa}a1`} className="fas fa-star"></i>
                                        )
                                    })}
                                    {((Math.floor(book_scores_avg) - book_scores_avg) !== 0) ? (<i className="fas fa-star-half-alt"></i>) : (<span></span>)}
                                    {[...Array(5 - Math.ceil(book_scores_avg)).keys()].map((_, idxb) => {
                                        return(
                                            <i key={`${idxb}b1`} className="far fa-star"></i>
                                        )
                                    })}
                                <span className="score-info">{book_scores_avg.toFixed(2)} · {scores_num} votes</span>
                                </Fragment>
                                ) : (<span></span>)}
                                <p>{book_info.synopsis}</p>
                            </Fragment>
                        ) : (<span></span>)}
                            </Fragment>
                        ) : (<span></span>)}
                        
                    </div>
                    {book_info ? (
                        <Fragment>
                    {(book_info.synopsis) ? (
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
                                            <i key={`${idxa}a2`} className="fas fa-star"></i>
                                        )
                                    })}
                                    {((Math.floor(review.score) - review.score) !== 0) ? (<i className="fas fa-star-half-alt"></i>) : (<span></span>)}
                                    {[...Array(5 - Math.ceil(review.score)).keys()].map((_, idxb) => {
                                        return(
                                            <i key={`${idxb}b2`} className="far fa-star"></i>
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
                        </Fragment>
                    ) : (<span></span>)}
                </div>
            </div>
        </Fragment>
    );
}

export default BookPage;