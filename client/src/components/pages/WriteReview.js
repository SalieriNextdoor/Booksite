import React, {Fragment, useContext, useEffect, useState} from 'react';
import BookContext from '../../context/book/bookContext';
import {setStarScore} from '../../utils/setStarScore';
import NavbarDashboard from '../layout/NavbarDashboard';
import AuthContext from '../../context/auth/authContext';


const WriteReview = props => {
    const errorMsgRef = React.createRef();
    const { match: {params} } = props;

    const bookContext = useContext(BookContext);
    const authContext = useContext(AuthContext);

    const {loadBook, book_info, error, postReview} = bookContext;
    const {loadUser, user} = authContext;

    useEffect(() => {
        loadUser();
        loadBook(params.book_id);
        
        setStarScore();

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (error) {
            props.history.push('/404')
        }
         
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

        if (text !== '' && score) {
            postReview({
                user_name, score, text, date
            }, params.book_id)

            props.history.push(`/reviewsuccess/${params.book_id}`);
        } else {
            props.history.push('/404')
        }
    }
    
    const removeMsg = () => errorMsgRef.current.classList.remove('float-in');

    return (
        <Fragment>
            <NavbarDashboard />
            <div ref={errorMsgRef} className="error-msg"><h5>{error ? error[0] : ""}</h5><span><i onClick={removeMsg} className="fas fa-times"></i></span></div>
            <div className="review">
                <div className="review-body">
                    <h2>Escreva uma review para<br />{book_info ? book_info.title : "..."}</h2>
                    <form id="star-form" onSubmit={onSubmit}>
                        <div id="star-input" className="star-input">
                            <h5>Dê sua nota:</h5>
                            <div id="stars">
                                <i id="1-star" className="far fa-star"></i>
                                <i id="2-star" className="far fa-star"></i>
                                <i id="3-star" className="far fa-star"></i>
                                <i id="4-star" className="far fa-star"></i>
                                <i id="5-star" className="far fa-star"></i>
                            </div>
                        </div>
                        <input onInput={onChange}  type="hidden" id="score-input" name="score"/>
                        <div className="review-writing">
                            <h5>Escreva sua review:</h5>
                            <textarea onChange={onChange} name="text" className="form-input" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-submit">Enviar Review</button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default WriteReview;