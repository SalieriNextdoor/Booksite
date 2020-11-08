import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import NavbarHome from '../layout/NavbarHome';

const Signup = () => {
    return (
        <Fragment>
            <NavbarHome />
            <div id="sign" className="card">
                <h3>Junte-se ao Bookviser</h3>
                <form className="signup-form">
                    <input className="form-input" type="text" placeholder="Usuário"/>
                    <input className="form-input" type="email" placeholder="Email"/>
                    <input className="form-input" type="password" placeholder="Senha"/>
                    <input className="form-input" type="password" placeholder="Confirmar Senha"/>
                    <input className="btn" type="button" value="Registrar"/>
                </form>
                <p>Já possui uma conta? <Link to="/login" className="sign-link">Entre.</Link></p>
            </div>
        </Fragment>
    );
}

export default Signup;