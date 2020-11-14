import React, {Fragment} from 'react';
import NavbarHome from '../layout/NavbarHome';

const Forgot = () => {
    return (
        <Fragment>
            <NavbarHome />
            <div id="forgot" className="card">
                <h3>Esqueci minha senha</h3>
                <form className="signup-form">
                    <input className="form-input" type="email" placeholder="Email"/>
                    <input className="btn" type="button" value="Resetar Senha"/>
                </form>
            </div>
        </Fragment>
    );
}

export default Forgot;