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

    render() {  
        return (
            <Fragment>
                <div ref={this.overlayRef} id="overlay-options" className="overlay-options hide">
                    <Link to="/login">Entrar</Link>
                    <Link to="/signup">Cadastrar</Link>
                </div>
                <div className="navbar">
                    <Link to="/" className="home-link"><img className="logo" src={Logo} alt="Logo"/></Link>
                    <div className="navbar-btns">
                        <Link to="/login" id="navbar-btn-log" className="btn">Entrar</Link>
                        <Link to="/signup" id="navbar-btn-sign" className="btn">Cadastrar</Link>
                    </div>
                </div>
                <button onClick={this.hamburgerToggle} id="hamburger-menu" className="hamburger-menu">
                    <i ref={this.hamburgerIconRef} id="hamburger-icon" className="fas fa-bars"></i>
                    <i ref={this.xIconRef} id="x-icon" className="fas fa-times hide"></i>
                </button>
            </Fragment>
        );
    }
}

export default NavbarHome;