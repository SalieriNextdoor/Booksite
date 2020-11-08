import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import NavbarHome from '../layout/NavbarHome';

const Login = () => {
    return (
        <Fragment>
            <NavbarHome />
            <div id="login" className="card">
                <h3>Entrar</h3>
                <form className="signup-form">
                    <input className="form-input" type="email" placeholder="Email"/>
                    <input className="form-input" type="password" placeholder="Senha"/>
                    <input className="btn" type="button" value="Entrar"/>
                </form>
                <Link to="/forgot" className="forgot-link">Esqueceu sua senha?</Link>
                <p>Não se registrou ainda? <Link to="/signup" className="sign-link">Crie uma conta.</Link></p>
            </div>
        </Fragment>
    );
}

export default Login;