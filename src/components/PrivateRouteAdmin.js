import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../App';
import Admin from './Admin';

const PrivateRouteAdmin = ({ children, ...rest }) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? loggedInUser.email === "admin@admin.com" ? (
                    children
                ) : <Admin /> :
                    (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }

        />
    );

};

export default PrivateRouteAdmin;