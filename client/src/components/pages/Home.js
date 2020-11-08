import React from 'react';
import {Link} from 'react-router-dom';
import NavbarHome from '../layout/NavbarHome';

const Home = () => {

    return(
        <div id="home">
            <NavbarHome />
            <div id="main-landing" className="main-landing">
                <div className="main-text">
                    <h1>A melhor plataforma de compartilhamento de leitura</h1>
                    <h2>Leia, descubra e compartilhe sobre seus livros favoritos<br/>com Booksite.</h2>
                </div>
            </div>
            <div className="outer-container">
            <div className="grid-container">
                <div className="grid-item">
                    <i className="fas fa-book-reader"></i>
                    <div className="grid-text">
                        <h5>Expanda seus horizontes</h5>
                        <p>Navegue pelo nosso catálogo e descubra novas experiências.</p>
                    </div>
                </div>
                <div className="grid-item">
                    <i className="fas fa-star-half-alt"></i>
                        <div className="grid-text">
                            <h5>Conte sua experiência</h5>
                            <p>Depois de experenciar seus livros, avalie e deixe sua própria<br/ >opinião!</p>
                        </div>
                </div>
                <div className="grid-item">
                    <i className="far fa-address-book"></i>
                        <div className="grid-text">
                            <h5>Organize os seus livros</h5>
                            <p>Nós te ajudaremos a manter bom controle da lista de títulos<br />que você já leu e pretende ler.</p>
                        </div>
                </div>
                <div className="grid-item">
                <i className="far fa-comments"></i>
                        <div className="grid-text">
                            <h5>Interaja com outros leitores</h5>
                            <p>Siga seus amigos, faça novos e engaje e converse com eles<br />sobre o que estão lendo!</p>
                        </div>
                </div>
            </div>
            </div>
            <div id="btn-bottom">
                <Link to="/signup" className="btn">Junte-se Agora</Link>
            </div>
        </div>
    );
}

export default Home;