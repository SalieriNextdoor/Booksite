import React, {Fragment, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import BookContext from '../../context/book/bookContext';
import NavbarDashboard from '../layout/NavbarDashboard';

const BookPage = props => {
    const bookContext = useContext(BookContext);

    const {loadBook, book_info, error} = bookContext;

    useEffect(() => {
        const { match: {params} } = props;

        loadBook(params.book_id);

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (error) {
            props.history.push('/404')
        }
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
                    <div className="book-reviews">
                        <h3>Reviews de Usuários</h3>
                        <Link to="/">Escreva uma review</Link>
                        <div className="book-review">
                            <div className="top-text">
                                <Link to="/">Dewfofo</Link>
                                <p>7 pessoas gostaram desta review</p>
                                <p>Mar 13, 2017</p>
                                <p>Nota: <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star-half-alt"></i></p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio explicabo rerum placeat eos deserunt repellendus maiores nesciunt delectus incidunt praesentium voluptas amet quibusdam voluptate possimus totam, quis asperiores in numquam suscipit. Dolores, sint nobis ratione quod consequuntur similique! Ad ipsam facilis, omnis fugiat ut quod ipsum ullam officiis ea soluta assumenda porro quaerat suscipit, maxime nobis voluptatibus excepturi maiores praesentium.</p>
                            </div>
                        </div>
                        <div className="book-review">
                            <div className="top-text">
                                <Link to="/">RonaldoCraque</Link>
                                <p>3 pessoas gostaram desta review</p>
                                <p>Apr 3, 2018</p>
                                <p>Nota: <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="far fa-star"></i> <i className="far fa-star"></i></p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio explicabo rerum placeat eos deserunt repellendus maiores nesciunt delectus incidunt praesentium voluptas amet quibusdam voluptate possimus totam, quis asperiores in numquam suscipit. Dolores, sint nobis ratione quod consequuntur similique! Ad ipsam facilis, omnis fugiat ut quod ipsum ullam officiis ea soluta assumenda porro quaerat suscipit, maxime nobis voluptatibus excepturi maiores praesentium.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default BookPage;