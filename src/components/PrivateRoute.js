import React from 'react';
import { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { UserContext } from '../App';
import Deals from './Deals';
import Order from './Order';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
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

export default PrivateRoute;