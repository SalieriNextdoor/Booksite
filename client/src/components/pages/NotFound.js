import React, {Fragment, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import NavbarHome from '../layout/NavbarHome';
import NavbarDashboard from '../layout/NavbarDashboard';
import AuthContext from '../../context/auth/authContext';


const NotFound = () => {
    const authContext = useContext(AuthContext);

    const {loadUser, loading, isAuthenticated} = authContext;

    useEffect(() =>{
        loadUser();
        
        // eslint-disable-next-line
        }, []);

    return (
        <Fragment>
            {(!loading && isAuthenticated) ? (
                <NavbarDashboard />
            ) : (<span></span>)}
            {!loading && !isAuthenticated ? (
                <NavbarHome />
            ) : (<span></span>)}
            <div className="not-found">
                <h2>404 Page Not Found</h2>
                <Link to={(!loading && isAuthenticated) ? "/dashboard" : "/"}><i className="fas fa-backward"></i></Link>
            </div>
        </Fragment>
    );
}

export default NotFound;