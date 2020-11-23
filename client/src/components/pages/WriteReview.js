import React, {Fragment, useContext, useEffect, useState} from 'react';
import BookContext from '../../context/book/bookContext';
import {setStarScore} from '../../utils/setStarScore';
import NavbarDashboard from '../layout/NavbarDashboard';
import AuthContext from '../../context/auth/authContext';


const WriteReview = props => {
    const { match: {params} } = props;

    const bookContext = useContext(BookContext);
    const authContext = useContext(AuthContext);

    const {loadBook, book_info, error, postReview} = bookContext;
    const {loadUser, user} = authContext;

    useEffect(() => {
        loadUser();
        loadBook(params.book_id);

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (error || authContext.error) {
            props.history.push('/404')
        }

        setStarScore();
         
        // eslint-disable-next-line
    }, [error])

    const [review, setReview] = useState({
        score: null,
        text: ''
    })

    let {score, text} = review;


    const onChange = e => setReview({...review, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        const months = {"01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", "12": "Dec"}
        const gen_date = new Date().toISOString().slice(0, 10).split("-")
        const date = `${months[gen_date[1]] } ${gen_date[2]}, ${gen_date[0]}`
        const user_name = user.username;

        postReview({
            user_name, score, text, date
        }, params.book_id)

        props.history.push(`/reviewsuccess/${params.book_id}`);
    }

    return (
        <Fragment>
            <NavbarDashboard />
            <div className="review">
                <div className="review-body">
                    <h2>Escreva uma review para<br />{book_info ? book_info.title : "..."}</h2>
                    <form onSubmit={onSubmit}>
                        <div id="star-input" className="star-input">
                            <h5>Dê sua nota:</h5>
                            <i id="1-star" className="far fa-star"></i>
                            <i id="2-star" className="far fa-star"></i>
                            <i id="3-star" className="far fa-star"></i>
                            <i id="4-star" className="far fa-star"></i>
                            <i id="5-star" className="far fa-star"></i>
                        </div>
                        <input onInput={onChange}  type="hidden" id="score-input" name="score"/>
                        <div className="review-writing">
                            <h5>Escreva sua review:</h5>
                            <textarea onChange={onChange} name="text" className="form-input"></textarea>
                        </div>
                        <button type="submit" className="btn btn-submit">Enviar Review</button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default WriteReview;