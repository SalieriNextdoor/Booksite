import React, {Fragment, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import BookContext from '../../context/book/bookContext';
import NavbarDashboard from '../layout/NavbarDashboard';
import NavbarHome from '../layout/NavbarHome';


const Search = () => {
    const bookContext = useContext(BookContext);
    const authContext = useContext(AuthContext);

    const {setTempInfo, searchBooks, book_info} = bookContext;
    const {isAuthenticated, loadUser} = authContext;

    useEffect(() => {
        loadUser();
        
        // eslint-disable-next-line
    }, []);

    const onChange = e => searchBooks({field: e.target.value});

    const onClick = (title, img) => setTempInfo({title, img});

    return (
        <Fragment>
            {isAuthenticated ? (<NavbarDashboard />) : (<NavbarHome />)}
            <div className="book-search">
                <form onSubmit={e => e.preventDefault()}>
                    <div className="search-input">
                        <input autoComplete="off" onChange={onChange} className="form-input" type="text" name="search" />
                        <i className="fas fa-search"></i>
                    </div>
                </form>
                    <div className="book-items">
                        {book_info ? (
                            <Fragment>
                            {Array.isArray(book_info) ? (
                            <Fragment>
                                {book_info.map((book, idx) => {
                                    return(
                                        <div onClick={onClick.bind(null, book.title, book.img)} key={idx} className="book-item">
                                            <Link to={`/bookpage/${book.id}`}><img src={book.img} alt=""/></Link>
                                            <Link to={`/bookpage/${book.id}`}><p>{book.title}</p></Link>
                                        </div>
                                    )
                                })}
                            </Fragment>
                        ) : (<span></span>)}
                            </Fragment>
                        ) : (<span></span>)}
</div>            </div>
        </Fragment>
    );
}

export default Search;