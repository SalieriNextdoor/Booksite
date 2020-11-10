import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';

const Dashboard = () => {
        const authContext = useContext(AuthContext);

        const {loadUser} = authContext;

        useEffect(() =>{ 
            loadUser()
            
            // eslint-disable-next-line
            }, []);

        return (
            <div>
                <h1>Placeholder Dashboard</h1>
            </div>
        );
}

export default Dashboard;