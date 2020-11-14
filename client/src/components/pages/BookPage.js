import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import NavbarDashboard from '../layout/NavbarDashboard';

const BookPage = () => {
    return (
        <Fragment>
            <NavbarDashboard />
            <div className="bookpage-grid">
                <div className="bookpage-grid-item">
                    <div className="book-img"><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3.jpg" alt=""/></div>
                </div>
                <div className="bookpage-grid-item">
                    <div className="book-text">
                        <h2>Harry Potter e a Pedra Filosofal</h2>
                        <h5>Por J.K. Rowling</h5>
                        <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star-half-alt"></i> <i class="far fa-star"></i> <span>3.47 · 1,200 votos</span>
                        <p>Sinopse: A vida de Harry Potter é miserável. Seus pais estão mortos e ele está preso com seus parentes sem coração, que o forçam a viver em um minúsculo armário embaixo da escada. Mas sua sorte muda quando ele recebe uma carta que conta a verdade sobre si mesmo: ele é um mago. Um misterioso visitante o resgata de seus parentes e o leva para sua nova casa, a Escola de Magia e Bruxaria de Hogwarts.</p>
                    </div>
                    <div className="book-reviews">
                        <div className="book-review">
                            <div className="top-text">
                                <Link>Dewfofo</Link>
                                <p>7 pessoas gostaram desta review</p>
                                <p>Mar 13, 2017</p>
                                <p>Nota: <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star-half-alt"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default BookPage;