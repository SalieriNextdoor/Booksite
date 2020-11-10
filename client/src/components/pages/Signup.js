import React, {Fragment, useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import NavbarHome from '../layout/NavbarHome';
import AuthContext from '../../context/auth/authContext';

const Signup = props => {
    const errorMsgRef = React.createRef();

    const authContext = useContext(AuthContext);

    const {register, isAuthenticated, error} = authContext;

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
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    const {username, email, password, password2} = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
            register({
                username,
                email,
                password,
                password2
            });
    };

    const removeMsg = () => errorMsgRef.current.classList.remove('float-in');

    return (
        <Fragment>
            <div ref={errorMsgRef} className="error-msg"><h5>{error ? error[0] : ""}</h5><span><i onClick={removeMsg} className="fas fa-times"></i></span></div>
            <NavbarHome />
            <div id="sign" className="card">
                <h3>Junte-se ao Bookviser</h3>
                <form onSubmit={onSubmit} className="signup-form">
                    <input onChange={onChange} name="username" className="form-input" type="text" placeholder="Usuário"/>
                    <input onChange={onChange} name="email" className="form-input" type="email" placeholder="Email"/>
                    <input onChange={onChange} name="password" className="form-input" type="password" placeholder="Senha"/>
                    <input onChange={onChange} className="form-input" name="password2" type="password" placeholder="Confirmar Senha"/>
                    <input className="btn" type="submit" value="Registrar"/>
                </form>
                <p>Já possui uma conta? <Link to="/login" className="sign-link">Entre.</Link></p>
            </div>
        </Fragment>
    );
}

export default Signup;