import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../img/logo-1.png';


class NavbarHome extends React.Component {

    constructor() {
        super();
        this.click_count = 0;
        this.overlayRef = React.createRef();
        this.hamburgerIconRef = React.createRef();
        this.xIconRef = React.createRef();
        this.hamburgerToggle = this.hamburgerToggle.bind(this);
    }

    hamburgerToggle() {
        if (this.click_count % 2 === 0) {
            this.overlayRef.current.classList.remove("hide");
            this.hamburgerIconRef.current.classList.add("hide");
            this.xIconRef.current.classList.remove("hide");
            this.click_count++;
        } else {
            this.overlayRef.current.classList.add("hide");
            this.hamburgerIconRef.current.classList.remove("hide");
            this.xIconRef.current.classList.add("hide");
            this.click_count++;
        }
    }

    render () {
        return (
            <Fragment>
                <div ref={this.overlayRef} id="overlay-options" className="overlay-options hide">
                    <Link to="/dashboard">Home</Link>
                    <Link to="/">Perfil</Link>
                    <Link to="/booklist">Minha Lista</Link>
                    <Link to="/search">Pesquisar</Link>
                    <Link to="/">Notificações</Link>
                    <Link to="/">Configurações</Link>
                </div>
                <div className="navbar navbar-dashboard">
                    <Link to="/dashboard" className="home-link"><img className="logo" src={Logo} alt="Logo"/></Link>
                    <div className="navbar-options">
                        <Link to="/dashboard" className="options-element">Home</Link>
                        <Link to="/" className="options-element">Perfil</Link>
                        <Link to="/booklist" className="options-element">Minha Lista</Link>
                        <Link to="/search" className="options-element">Pesquisar</Link>
                    </div>
                    <div className="navbar-other-options">
                        <button className=""><i className="fas fa-bell"></i></button>
                        <Link to="/" className=""><i className="fas fa-cog"></i></Link>
                    </div>
                </div>
                <button onClick={this.hamburgerToggle} id="hamburger-menu" className="hamburger-menu">
                    <i ref={this.hamburgerIconRef} id="hamburger-icon" className="fas fa-bars"></i>
                    <i ref={this.xIconRef} id="x-icon" className="fas fa-times hide"></i>
                </button>
            </Fragment>
        )
    }
}

export default NavbarHome;