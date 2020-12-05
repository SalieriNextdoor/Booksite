import React, {Fragment, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import NavbarDashboard from '../layout/NavbarDashboard';
import BookContext from '../../context/book/bookContext';
import AuthContext from '../../context/auth/authContext';

const BookList = () => {
    const authContext = useContext(AuthContext);
    const bookContext = useContext(BookContext);

    const {loadUser, user} = authContext;
    const {setTempInfo, deleteBookEntry} = bookContext;

    useEffect(() =>{
        loadUser()
        
        // eslint-disable-next-line
        }, []);

     const splitAt = index => x => [x.slice(0, index), x.slice(index)]

     const onClick = (title, img) => setTempInfo({title, img});

     const onDelete = (book, idx) => {
        deleteBookEntry({user_id: user._id, book});
        document.getElementById(`${idx}`).remove();
     }

    return (
        <Fragment>
            <NavbarDashboard />
            <div className="book-list">
                {user ? (<Fragment>
                    {user.books.sort((a, b) => parseFloat(b.score) - parseFloat(a.score)).map((book, idx) => {
                        return (
                            <div id={`${idx}`} key={idx} className="book-listed">
                                <img className="book-listed-img" src={book.img} alt=""/>
                                <Link onClick={onClick.bind(null, book.title, book.img)} imgdata={book.img} to={`/bookpage/${book.book_id}`} className="book-listed-name">{book.title.length > 60 ? splitAt(60)(book.title)[0] + "..." : book.title}</Link>
                                <p className="book-listed-score">{parseFloat(book.score).toFixed(1)}</p>
                                <i onClick={onDelete.bind(null, book, idx)} className="fas fa-trash-alt"></i>
                            </div>
                        )
                    })}
                </Fragment>) : (<span></span>)}
            </div>
        </Fragment>
    );
}

export default BookList;