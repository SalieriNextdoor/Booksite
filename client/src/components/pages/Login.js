import React, {Fragment, useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import NavbarHome from '../layout/NavbarHome';
import AuthContext from '../../context/auth/authContext';

const Login = props => {
    const errorMsgRef = React.createRef();

    const authContext = useContext(AuthContext);

    const {login, isAuthenticated, error} = authContext;

    useEffect (() => {
        if (isAuthenticated) {
            props.history.push('/dashboard');
        }
        if (error) {
            if (error.length > 0) {
                console.error(error);
                errorMsgRef.current.classList.add("float-in");
            }
        }

        // eslint-disable-next-line
    }, [isAuthenticated, error, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const {email, password} = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        login({
            email,
            password
        });
    };

    const removeMsg = () => errorMsgRef.current.classList.remove('float-in');

    return (
        <Fragment>
            <div ref={errorMsgRef} className="error-msg"><h5>{error ? error[0] : ""}</h5><span><i onClick={removeMsg} className="fas fa-times"></i></span></div>
            <NavbarHome />
            <div id="login" className="card">
                <h3>Entrar</h3>
                <form onSubmit={onSubmit} className="signup-form">
                    <input onChange={onChange} className="form-input" name="email" type="email" placeholder="Email" required/>
                    <input onChange={onChange} className="form-input" name="password" type="password" placeholder="Senha" required/>
                    <input className="btn" type="submit" value="Entrar"/>
                </form>
                <Link to="/forgot" className="forgot-link">Esqueceu sua senha?</Link>
                <p>Não se registrou ainda? <Link to="/signup" className="sign-link">Crie uma conta.</Link></p>
            </div>
        </Fragment>
    );
}

export default Login;