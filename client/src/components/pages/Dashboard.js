import React, {useContext, useEffect, Fragment} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import Navbar from '../layout/NavbarDashboard';

const Dashboard = () => {
        const authContext = useContext(AuthContext);

        // remove eslint disable later
        // eslint-disable-next-line
        const {loadUser} = authContext;

        useEffect(() =>{
            // loadUser() uncomment later
            
            // eslint-disable-next-line
            }, []);

        return (
            <Fragment>
                <Navbar />
                <div className="dashboard-screen">
                    <div className="dashboard-strip">
                        <h3>Em Alta</h3>
                        <div className="trends">
                            <div className="trending-item">
                                <Link><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3.jpg" alt=""/></Link>
                                <Link><p>Castigo</p></Link>
                            </div>
                            <div className="trending-item">
                                <Link><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg" alt=""/></Link>
                                <Link><p>A Sereia de Harry</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-strip">
                        <h3>Atividade</h3>
                        <div className="activity">
                            <div className="activity-text">
                                <Link>SalieriNextdoor</Link>
                                <p>Terminou de ler <Link>Harry Potter e a Pedra Filosofal</Link>.</p>
                                <p>5 minutos atrás</p>
                            </div>
                            <div className="activity-actions">
                                <button><i class="fas fa-comments"></i></button>
                                <button><i class="fas fa-heart"></i></button>
                            </div>
                        </div>
                            <div className="activity">
                                <div className="activity-text">
                                    <Link>JoãozinhoGameplay12</Link>
                                    <p>Terminou de ler <Link>Percy Jackson e o Mar de Monstros</Link>.</p>
                                    <p>1 hora atrás</p>
                                </div>
                                <div className="activity-actions">
                                    <button><p>1</p><i class="fas fa-comments"></i></button>
                                    <button><p>1</p><i class="fas fa-heart"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-strip">
                        <h3>Lendo</h3>
                            <div className="books-reading">
                                <Link><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg" alt=""/></Link>
                                <Link><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3.jpg" alt=""/></Link>
                                <Link><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg" alt=""/></Link>
                                <Link><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg" alt=""/></Link>
                                <Link><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg" alt=""/></Link>
                                <Link><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg" alt=""/></Link>
                                <Link><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg" alt=""/></Link>
                                <Link><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg" alt=""/></Link>
                            </div>
                    </div>
                </div>
            </Fragment>
        );
}

export default Dashboard;