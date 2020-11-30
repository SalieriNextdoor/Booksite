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

    const onClick = e => setTempInfo({title: e.target.title, img: e.target.src});

    return (
        <Fragment>
            {isAuthenticated ? (<NavbarDashboard />) : (<NavbarHome />)}
            <div className="book-search">
                <form>
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
                                        <div key={`${idx}`} className="book-item">
                                            <Link onClick={onClick} to={`/bookpage/${book.id}`}><img title={book.title} src={book.img} alt=""/></Link>
                                            <p>{book.title}</p>
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